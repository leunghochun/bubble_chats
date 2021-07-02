/*
 * @Author: joe leung
 * @Date: 2021-06-22 10:55:53
 * @LastEditTime: 2021-07-02 17:51:23
 * @LastEditors: Please set LastEditors
 * @Description: To make a user login input box 
 * @FilePath: /ui/bubble_chats/src/components/login.js
 */

import React, {useState, useCallback , useEffect} from "react";
import { connect } from "react-redux";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


import { getUser } from "../redux/selectors";
import { createUser } from "../redux/actions";

const Login = (props) => {
    const [value, setValue] = useState('');
    const handleChange = useCallback(e => setValue(e.target.value), []);

    const handleClick=(e)=>{
        let names = value.split(' ');
        const data = {
            "userId": value,
            "firstName": names[0],
            "lastName": names[1] ? names[1] : ''
        }
        props.createUser(data)
    }

    return (
        <Container>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon2"
                    onChange={handleChange}
                />
                <InputGroup.Append>
                <Button variant="primary" onClick={handleClick}>Go</Button>
                </InputGroup.Append>
            </InputGroup>
        </Container>
    );
}

const mapStateToProps = (state) => {
    const user = getUser(state);
    console.log(state);
    return { user };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (data) => dispatch(createUser(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);