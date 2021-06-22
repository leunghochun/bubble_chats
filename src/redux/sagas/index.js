/*
 * @Author: joe leung
 * @Date: 2021-06-21 14:35:43
 * @LastEditTime: 2021-06-22 17:29:12
 * @LastEditors: Please set LastEditors
 * @Description: to handle saga processes
 * @FilePath: /ui/bubble_chats/src/saga/index.js
 */

import {all, call, put, fork, takeEvery} from 'redux-saga/effects';
import { getBubbles , createUser } from '../actions';
import * as api from '../../api/data';
import * as types from "../actionTypes";


const fetchFunc = ({ url, options }) => {
    return fetch(url, options);
}

export function* newUser(createUser) {
    try {
        console.log('userUser', createUser.payload.data);
        const data = yield call(api.createUser, createUser.payload.data);
        if (data && data.data) {
            console.log(data.data.userId);
            yield put({ type: createUser, user : data});
        }
    } catch (e) {
        console.log(e);
    }
}

function* watchNewUser() {
    yield takeEvery(types.CREATE_USER, newUser);
}

export function* fetchBubbleList() {
    try {
        console.log('fetchBubbles');
        const data = yield call(api.getBubbles);
        yield put({ type: getBubbles, bubbleList: data});
    } catch (e) {
        console.log(e);
    }
}

export function* watchBubbleList() {
    yield takeEvery(types.GET_BUBBLES, fetchBubbleList);
}

// replace the current rootSaga generator
export default function* rootSaga() {
    yield all([fork(watchBubbleList), fork(watchNewUser)]);
}