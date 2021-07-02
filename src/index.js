/*
 * @Author: joe leung
 * @Date: 2021-06-21 12:05:39
 * @LastEditTime: 2021-07-02 16:09:50
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

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

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
