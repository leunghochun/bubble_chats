/*
 * @Author: your name
 * @Date: 2021-06-21 12:05:39
 * @LastEditTime: 2021-06-22 11:09:55
 * @LastEditors: your name
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