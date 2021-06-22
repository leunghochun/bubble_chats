/*
 * @Author: joe leung
 * @Date: 2021-06-21 12:05:39
 * @LastEditTime: 2021-06-22 09:19:09
 * @LastEditors: Please set LastEditors
 * @Description: redux store configuration
 * @FilePath: /ui/bubble_chats/src/redux/store/index.js
 */
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';

import rootReducer from "../reducers";
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
