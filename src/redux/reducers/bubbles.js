/*
 * @Author: your name
 * @Date: 2021-06-21 12:05:39
 * @LastEditTime: 2021-06-22 16:53:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ui/bubble_chats/src/redux/reducers/bubbles.js
 */
import { MOVE_UP, MOVE_DOWN, GET_TARGETS, GET_BUBBLES } from "../actionTypes";

const initialState = {
  people: {
    1: {
      name: "Denu",
      // bottom: 0,
      rect: null
    },
    2: {
      name: "Joe",
      // bottom: 0,
      rect: null
    }
  },
  activeBubble: null
};

const bubbles = (state = initialState, action) => {
  console.log("bubbles reducer:", action.type);
  switch (action.type) {
    case GET_BUBBLES: {
      return {
        ...state,
        bubblesList: action.bubblesList
      };
    }
    case MOVE_UP: {
      const key = action.payload.data.id;
      const newBottom = action.payload.data.bottom;
      const newRect = action.payload.data.myPosition;
      // console.log(newRect);

      // const key = "ravenclaw";
      return {
        ...state, // copy state
        people: {
          ...state.people, // copy people
          [key]: {
            // update one specific people (using Computed Property syntax)
            ...state.people[key], // copy that specific people's properties
            bottom: newBottom, // update its `bottom` property
            rect: newRect // update its `rect` property
          }
        }
      };
    }
    case MOVE_DOWN: {
      const key = action.payload.data.id;
      const newBottom = action.payload.data.bottom;
      const newRect = action.payload.data.rect;
      // console.log(state.people);
      // console.log(newRect);
      // const key = "ravenclaw";
      return {
        ...state, // copy state
        people: {
          ...state.people, // copy people
          [key]: {
            // update one specific people (using Computed Property syntax)
            ...state.people[key], // copy that specific people's properties
            bottom: newBottom, // update its `bottom` property
            rect: newRect // update its `rect` property
          }
        }
      };
    }

    default: {
      //console.log(state, action);
      return state;
    }
  }
};

export default bubbles;