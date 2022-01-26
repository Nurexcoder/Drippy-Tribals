import React from 'react'

import styled from "styled-components"
import { mobile } from '../responsive'
const Container = styled.div `

    height: 30px;
    background-color:teal;
    color:white;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size:14px;
    ${mobile({
        width: "100vw",
    })}
    `


const Announcement = () => {
    return (
        <Container>
            Super deal upto 70% off
        </Container>
    )
}

export default Announcement
