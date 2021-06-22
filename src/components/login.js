/*
 * @Author: joe leung
 * @Date: 2021-06-22 10:55:53
 * @LastEditTime: 2021-06-22 18:10:36
 * @LastEditors: Please set LastEditors
 * @Description: To make a user login input box 
 * @FilePath: /ui/bubble_chats/src/components/login.js
 */

import React from "react";
import { connect } from "react-redux";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import { getUser } from "../redux/selectors";
import { createUser } from "../redux/actions";

const Login = (props) => {

    const handleChange = (e) => {
        let names =e.target.value.split(' ');
        const data = {
            "userId": e.target.value,
            "firstName": names[0],
            "lastName": names[1] ? names[1] : ''
        }
        props.createUser(data);
    }

    return (
        <Container>
            <Form>
                <Form.Group controlId="formName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter user name" onChange={handleChange}/>
                    <Form.Label>{props.user}</Form.Label>
                </Form.Group> 
            </Form>
        </Container>
    );
}

const mapStateToProps = (state) => {
    const user = getUser(state);
    console.log(user);
    return { user };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (data) => dispatch(createUser(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);