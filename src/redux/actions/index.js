/*
 * @Author: joe leung
 * @Date: 2021-06-21 12:05:39
 * @LastEditTime: 2021-06-22 12:04:08
 * @LastEditors: Please set LastEditors
 * @Description: all actions for redux
 * @FilePath: /ui/bubble_chats/src/redux/actions/index.js
 */
import { GET_BUBBLES, MOVE_UP, MOVE_DOWN , CREATE_USER } from "../actionTypes";

export const movingUp = (data) => ({
  type: MOVE_UP,
  payload: { data }
});

export const movingDown = (data) => ({
  type: MOVE_DOWN,
  payload: { data }
});

export const getBubbles = (data) => ({
  type: GET_BUBBLES,
  payload: { data }
});

export const createUser = (data) => ({
  type: CREATE_USER,
  payload: { data }
})
