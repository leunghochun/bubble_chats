/*
 * @Author: joe leung
 * @Date: 2021-06-21 12:05:39
 * @LastEditTime: 2021-06-22 17:07:34
 * @LastEditors: Please set LastEditors
 * @Description: redux selector operation
 * @FilePath: /ui/bubble_chats/src/redux/selectors/index.js
 */
export const getBubbleList = (store) => store.bubbles;

export const getUser = (store) => store.user;

export const getTargetBubbles = (store, rect) => {
  // console.log(rect);
  // console.log(store);
  return true;
};
