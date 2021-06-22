/*
 * @Author: joe leung
 * @Date: 2021-06-22 12:15:29
 * @LastEditTime: 2021-06-22 17:00:37
 * @LastEditors: Please set LastEditors
 * @Description: consolidate all api calls
 * @FilePath: /ui/bubble_chats/src/api/data.js
 */
import axios from 'axios';

const endpoint = 'http://localhost:8080/';
const fetchFunc = ({ url, options }) => {
    return fetch(url, options);
}

export const getBubbles = () => {
    const url = endpoint + 'api/bubbles/';
    const response = axios.get(url);

    return response;
}

export const createUser = (data) => {
    console.log(data);
    const url = endpoint + 'api/users/';
    const response = axios.post(url,  data);
    
    return response;
}