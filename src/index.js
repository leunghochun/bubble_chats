/*
 * @Author: joe leung
 * @Date: 2021-06-21 12:05:39
 * @LastEditTime: 2021-06-22 09:46:41
 * @LastEditors: Please set LastEditors
 * @Description: Application toot entry point
 * @FilePath: /ui/bubble_chats/src/index.js
 */
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./redux/store";
import { getBubbles } from './redux/actions';
import App from "./App";

const rootElement = document.getElementById("root");

//store.dispatch(getBubbles());

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
