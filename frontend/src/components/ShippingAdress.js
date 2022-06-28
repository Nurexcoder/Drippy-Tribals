import { TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Component = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 20px 25%;
`;
const Title = styled.h3`
    margin: 20px 0;
`;
const TextFieldContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    margin: 10px 0;
`;
const Input = styled(TextField)`
    width: 48%;
    margin: 0 15px;
`;
const InputLine = styled(TextField)`
    width: 100%;
    margin: 10px 0 !important;
`;

const ShippingAdress = () => {
    return (
        <>
            <Title>Shipping Address</Title>
            <TextFieldContainer>
                <Input label='First Name' name='firstName' variant='outlined' />
                <Input label='Last Name' name='lastName' variant='outlined' />
            </TextFieldContainer>
            <InputLine
                label='Email'
                name='email'
                type='email'
                variant='outlined'
            />
            <InputLine
                label='Street Address'
                name='sAddress'
                type='text'
                variant='outlined'
            />
            <InputLine
                label='Village'
                name='village'
                type='text'
                variant='outlined'
            />
            <TextFieldContainer>
                <Input
                    label='State'
                    name='state'
                    defaultValue='Assam'
                    disabled
                    variant='outlined'
                />
                <Input
                    label='District'
                    name='dist'
                    defaultValue='Lakhimpur'
                    disabled
                    variant='outlined'
                />
            </TextFieldContainer>
            <TextFieldContainer>
                <Input
                    label='Phone Number'
                    // type=''
                    name='phone'
                    variant='outlined'
                />
                <Input
                    label='Alternate Number'
                    name='aPhone'
                    // type='number'
                    variant='outlined'
                />
            </TextFieldContainer>
        </>
    );
};

export default ShippingAdress;
