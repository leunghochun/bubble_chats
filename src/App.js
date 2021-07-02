/*
 * @Author: your name
 * @Date: 2021-06-21 12:05:39
 * @LastEditTime: 2021-07-02 16:09:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ui/bubble_chats/src/App.js
 */
import "./styles.css";
import BubbleList from "./components/bubbleList";
import Login from "./components/login";

export default function App() {
  return (
    <div className="App">
      <Login/>
      <BubbleList />
    </div>
  );
}