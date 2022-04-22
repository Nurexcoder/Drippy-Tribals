import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/apiCalls";

// import Link from 'react-dom'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: 
    /* linear-gradient(rgba(255,255,255,0.5),
                                    rgba(255,255,255,0.5)), */ url("registerbg.jpg");
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Wrapper = styled.div`
    width: 30%;
    padding: 20px;
    background-color: #fff;
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
const Input = styled.input`
    flex: 1;
    min-width: 70%;
    margin: 20px 10px 0 0;
    padding: 10px;
`;
const Link = styled.a`
    font-size: 12px;
    margin-bottom: 10px;
    text-decoration: underline;
    cursor: pointer;
`;
const SubmitButton = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin: 15px 0;
    &:disabled {
        color: green;
        cursor: not-allowed;
    }
    /* ::ds */
`;
const Error = styled.span`
    color: red;
`;

const Register = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);
    const handleLogin = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
    };

    console.log(isFetching);
    return (
        <Container>
            <Wrapper>
                <Title>LOG IN</Title>
                <Form onSubmit={handleLogin}>
                    <Input
                        placeholder='User Name'
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <Input
                        type='password'
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <SubmitButton disabled={isFetching}>SIGN IN</SubmitButton>
                    {error && <Error>Something went wrong</Error>}
                    <Link>FORGOT PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Register;
