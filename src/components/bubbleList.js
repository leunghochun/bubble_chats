/*
 * @Author: joe leung
 * @Date: 2021-06-21 12:05:39
 * @LastEditTime: 2021-06-22 15:31:25
 * @LastEditors: Please set LastEditors
 * @Description: bubble list component
 * @FilePath: /ui/bubble_chats/src/components/bubbleList.js
 */
import React from "react";
import { connect } from "react-redux";

import { getBubbleList } from "../redux/selectors";
import { getWindowDimensions, getRandomInt } from "../utils/tools";
import Bubble from "./bubble";

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
