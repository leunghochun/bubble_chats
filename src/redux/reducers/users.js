/*
 * @Author: your name
 * @Date: 2021-06-21 12:05:39
 * @LastEditTime: 2021-06-22 18:34:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ui/bubble_chats/src/redux/reducers/bubbles.js
 */
import { CREATE_USER } from "../actionTypes";

const initialState = {};

const user = (state = initialState, action) => {
  console.log('user', action.type);
  switch (action.type) {
    case CREATE_USER: {
      const userId = action.payload.data.userId;
      const firstName = action.payload.data.firstName;
      const lastName = action.payload.data.lastName;
      console.log('user reducers:', userId, state);

      return {
        ...state,
        user: userId,
        firstName: firstName,
        lastName: lastName
      };
    }
    default: {
      //console.log(state, action);
      return state;
    }
  }
};

export default user;