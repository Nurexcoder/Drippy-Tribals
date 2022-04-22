import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import config from "../data/config";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

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
    width: 40%;
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
    flex-wrap: wrap;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
`;
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0;
`;
const CheckBox = styled.input``;
const SubmitButton = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Register = () => {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e.target.confirmP.value);
        if (e.target.password.value !== e.target.confirmP.value) {
            Swal.fire("Warning", "Both password are not similar");
            return;
        }
        const submitData = {
            name: e.target.firstname.value + " " + e.target.lastname.value,
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value,
        };
        // console.log(submitData);

        try {
            handleToggle();
            const res = await axios(`${config.url}/auth/register`, {
                method: "POST",
                data: submitData,
            });
            handleClose();
            Swal.fire("Created", "Account successfully created", "success");
        } catch (error) {
            Swal.fire("Error", "Something went wrong", "error");
        }

        // fetch(`${config.url}/api/auth/register`, {
        //     method: "POST",
        //     body: {
        //         hi: "hi",
        //     },
        // }).then((res) => console.log(res));
    };

    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form onSubmit={handleSubmit}>
                    <Input name='firstname' placeholder='First Name' />
                    <Input name='lastname' placeholder='Last Name' />
                    <Input name='username' placeholder='Username' />
                    <Input name='email' placeholder='Email' />
                    <Input name='password' placeholder='Password' />
                    <Input name='confirmP' placeholder='Confirm Password' />
                    <CheckBox type='checkbox' />
                    <Agreement>
                        By creating a account, I consent to the processing of my
                        personal data in accordance with the{" "}
                        <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Backdrop
                        sx={{
                            color: "#fff",
                            zIndex: (theme) => theme.zIndex.drawer + 1,
                        }}
                        open={open}
                        onClick={handleClose}>
                        <CircularProgress color='inherit' />
                    </Backdrop>
                    <SubmitButton>Register</SubmitButton>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Register;
