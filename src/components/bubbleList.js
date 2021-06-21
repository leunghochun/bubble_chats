import React from "react";
import { connect } from "react-redux";
import { getBubbleList } from "../redux/selectors";
import Bubble from "./bubble";
import { getWindowDimensions, getRandomInt } from "../utils/tools";

const BubbleList = ({ bubbles }) => (
  <div>
    {Object.keys(bubbles.people).map((bubble, index) => {
      return (
        <Bubble
          label={bubbles.people[bubble].name}
          key={bubbles.people[bubble].name + bubble}
          id={bubble}
          height={50}
          // left={getRandomInt(getWindowDimensions().width) - 50}
          left={getRandomInt(100)}
        />
      );
    })}
  </div>
);

const mapStateToProps = (state) => {
  const bubbles = getBubbleList(state);
  // console.log(bubbles.people);
  return { bubbles };
};

export default connect(mapStateToProps)(BubbleList);
