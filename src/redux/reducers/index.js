/*
 * @Author: joe leung
 * @Date: 2021-06-21 12:05:39
 * @LastEditTime: 2021-06-22 15:40:03
 * @LastEditors: Please set LastEditors
 * @Description: combine reducers
 * @FilePath: /ui/bubble_chats/src/redux/reducers/index.js
 */
import { combineReducers } from "redux";
import bubbles from "./bubbles";
import users from "./users";

export default combineReducers({ bubbles, users });
