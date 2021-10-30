import React from 'react'
import {Send} from '@material-ui/icons' 
import styled from 'styled-components'


const Container = styled.div `
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #e2f5f4c6;
    /* padding: 20px; */
    /* margin:24px; */
    /* margin: 40px 50px; */
    `

const Title = styled.h1 `
    font-size: 70px;
    margin-bottom: 20px;
`
const Description = styled.p `
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    
`
const InputContainer = styled.div `
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgrey;
    /* display: flex;
    align-items: center;
    justify-content: center; */
`
const Input = styled.input `
        outline: none;
        border: 1px solid #d9eef1b2;
        /* border-radius: 10px; */
        flex: 8;
        padding-left: 20px;
        `
const Button = styled.button `
    flex: 1;
    background-color: teal;
    border: none;
    color: white;
    /* border-top-left-radius:4px; */
    /* border-bottom-left-radius:4px; */
`

const NewsLetter = () => {
    return (
       <Container>
           <Title>Newsletter</Title>
           <Description>Get timely updates from your favorite products.</Description>
           <InputContainer>
                <Input placeholder="Your Email"/>
                <Button>
                    <Send/>
                </Button>

           </InputContainer>
       </Container>
    )
}

export default NewsLetter
