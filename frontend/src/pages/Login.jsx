import React from 'react'
import styled from 'styled-components'

// import Link from 'react-dom'


const Container = styled.div `
    width: 100vw; 
    height :100vh ;
    background-image: 
    /* linear-gradient(rgba(255,255,255,0.5),
                                    rgba(255,255,255,0.5)), */
                                    url('registerbg.jpg') ;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    `
const Wrapper = styled.div `
        width: 30%;
        padding: 20px;
        background-color: #fff;
    
`   
const Title = styled.h1 `
    font-size: 24px;
    font-weight:300;
    margin-bottom: 20px;

` 
const Form = styled.form `
    display: flex;
    flex-direction: column;
    `    
const Input = styled.input `
    flex:1;
    min-width: 70%;
    margin: 20px 10px 0 0;
    padding: 10px;
`    
const Link = styled.a `
    font-size: 12px;
    margin-bottom: 10px;
    text-decoration: underline;
    cursor: pointer;
`    
const SubmitButton = styled.button ` 
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color:white;
    cursor: pointer;
    margin: 15px 0;
`  

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>LOG IN</Title>
                <Form>
                    <Input placeholder='User Name'/>
                    <Input type='password' placeholder='Password'/>
                    
                   
                    <SubmitButton>SIGN IN</SubmitButton>
                    <Link >FORGOT PASSWORD?</Link>
                    <Link >CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register