import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import Avatar from "react-avatar";

import { getWindowDimensions } from "../utils/tools";
import { movingUp, movingDown } from "../redux/actions";
import { getBubbleList } from "../redux/selectors";

const Bubble = (props) => {
  const id = props.id;
  const key = props.label + props.id;
  const BubbleRef = useRef();
  const screenSize = getWindowDimensions();

  const [isBottom, setIsBottom] = useState(true);
  const [Style, setStyle] = useState({
    position: "absolute",
    bottom: "0px",
    left: props.left
  });

  function getBubble(bubbles, p) {
    if (!bubbles || bubbles.length <= 0) return null;
    // console.log("getBubble:", bubbles, bubbles.length);

    const b = bubbles.map((bubble) => {
      // console.log(bubble);
      // target point a b
      const a = bubble.data.rect.x;
      const b = bubble.data.rect.x + bubble.data.rect.width;
      // const bottom = bubble.data.rect.top;

      // self point x y
      const x = p.x;
      const y = p.x + p.width;

      // console.log("position a:", a);
      // console.log("position b:", b);
      // console.log("position x:", x);
      // console.log("position y:", y);

      bubble.x = x;
      bubble.y = y;
      bubble.a = a;
      bubble.b = b;

      if (a === x && b === y) {
        // check if same column
        // console.log("same column", bubble);
        bubble.position = 1; // 1 - middle
        return bubble;
        // returnBubbles.push(target);
      } else if (y > a && a > x) {
        // check if left
        // console.log("isLeft", bottom);
        bubble.position = 0; // 0 - left
        return bubble;
      } else if (y > b && b > x) {
        // otherwise assumed right
        // console.log("isRight", bottom);
        bubble.position = 2; // 2 - right
        // check if any bubbles next by right hand side
        return bubble;
      } else {
        // console.log("can't found");
        return null;
      }
    });

    if (b.length > 0) return b[0];

    return null;
  }

  function getOneMoreBubble(bubbles, left) {
    return bubbles.filter((bubble) => bubble.data.rect.left > left);
  }

  function handleClick(e) {
    e.preventDefault();

    const { people } = props.bubbles;

    const bubbles = Object.keys(people)
      .map((key) => ({
        id: key,
        data: people[key]
      }))
      .filter(
        (bubble) =>
          bubble.id !== id &&
          bubble.data.rect !== null &&
          bubble.data.rect !== undefined
      ) // get all bubbles except me
      // .filter(
      //   (bubble) => bubble.data.rect !== null && bubble.data.rect !== undefined
      // ) // filter all bubbles without position data
      .sort((a, b) => b.data.rect.bottom - a.data.rect.bottom); // sort by descending order by position bottom value
    // console.log("bubbles:1111", bubbles);
    const elem = ReactDOM.findDOMNode(BubbleRef.current);
    let myPosition = elem.getBoundingClientRect().toJSON();

    let bottom = 0;
    let maxBottom = 0;
    let left = myPosition.left;
    let styleSheet = document.styleSheets[0];

    // console.log("isBottom:", isBottom);
    if (isBottom) {
      const newBubble = getBubble(bubbles, myPosition);

      if (newBubble && newBubble.data && newBubble.data.rect) {
        // console.log("newBubble:", newBubble);
        maxBottom = newBubble.data.rect.bottom;

        // console.log("newBubble", newBubble, newBubble.position);

        // if (newBubble.position === 2) {
        //   // check any bubbles from right
        //   const extraBubble = getOneMoreBubble(
        //     bubbles,
        //     newBubble.data.rect.left + newBubble.data.rect.width
        //   );
        //   // console.log("extraBubble:", extraBubble);
        // }
      }

      // console.log("maxBottom:", maxBottom);
      if (maxBottom === 0) bottom = getWindowDimensions().height - props.height;
      // calcuate the possible end position of anmiatiion
      else bottom = maxBottom - props.height;

      if (newBubble) {
        const x1 = newBubble.data.rect.x;
        const y1 =
          screenSize.height -
          newBubble.data.rect.y -
          newBubble.data.rect.height;
        const x2 = myPosition.x;
        const d = props.height;

        const y2 =
          y1 + Math.sqrt(Math.abs(Math.pow(d, 2) - Math.pow(x2 - x1, 2)));

        // console.log(
        //   `x1: ${x1}, y1: ${y1}, x2: ${x2} y2, ${y2}`,
        //   screenSize.height,
        //   newBubble.data.rect.y
        // );

        // construct anmiation style and keyframes
        // console.log("before maxBottom", maxBottom, y2);
        maxBottom -= y2;
        // console.log("after maxBottom", maxBottom, bottom);
        bottom = maxBottom;
      }

      let keyframes = `@keyframes ${key} {
        0% {  left: ${myPosition.left}px; bottom: 0%; transform:translateX(0) rotate(0deg); }
        20% { transform: translateX(-4px) rotate(4deg); }
        50% { transform: translateX(8px) rotate(-8deg); }
        75% { transform: translateX(-10px) rotate(10deg); }
        100% { 
            left: ${left}px;
            bottom: ${bottom}px;
            transform: translateX(0) rotate(0deg); 
        }
      }`;

      // console.log(keyframes);

      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

      setStyle({
        position: "absolute",
        animationName: key,
        animationDuration: "2s",
        animationIterationCount: 1,
        animationDirection: "normal",
        animationFillMode: "forwards"
      });

      myPosition.bottom = bottom;
      myPosition.left = left;
      props.movingUp({ id, bottom, myPosition });
    } else {
      // rect.bottom = bottom;
      bottom = props.bubbles.people[id].bottom;

      let keyframes = `@keyframes ${key}runningDown {
        from {left: ${left}px; bottom: ${bottom}px;}
        to {left: ${left}px; bottom: 0px;}
      }`;
      // console.log(keyframes);
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

      setStyle({
        position: "absolute",
        // bottom: "0px",
        animationName: key + "runningDown",
        animationDuration: "1s",
        animationIterationCount: 1,
        animationDirection: "normal",
        animationFillMode: "forwards"
      });

      myPosition.bottom = bottom;
      myPosition.left = left;
      props.movingDown({ id, bottom, myPosition });
    }
    // console.log(Style);
    setIsBottom(!isBottom);
  }

  // console.log(Style);
  return (
    <Avatar
      ref={BubbleRef}
      style={Style}
      name={props.label}
      size={props.height}
      round={true}
      onClick={handleClick}
    />
  );
};

const mapStateToProps = (state) => {
  const bubbles = getBubbleList(state);
  // //console.log(bubbles.people);
  return { bubbles };
};

const mapDispatchToProps = (dispatch) => {
  return {
    movingUp: (data) => dispatch(movingUp(data)),
    movingDown: (data) => dispatch(movingDown(data))
  };
};

// export default Bubble;
export default connect(mapStateToProps, mapDispatchToProps)(Bubble);
