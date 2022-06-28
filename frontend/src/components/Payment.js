// import { FormControl } from "@material-ui/core";
import { Money } from "@material-ui/icons";
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
} from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import PaymentIcon from "@mui/icons-material/Payment";
import React from "react";
import styled from "styled-components";

const Component = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 10px 25%;
`;
const FormControls = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.5);
    width: 100%;
    height: auto;
    padding: 10px 20px;
    border-radius: 5px;
`;

const Title = styled.h3``;
const CashComponent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid rgba(0, 0, 0, 0.3);
    margin: 20px 0;
    padding: 20px 0;
    border-radius: 5px;
    /* justify-content: center; */
`;
const Upper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const Name = styled.h4`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
`;
const Desc = styled.span`
    padding: 10px 20px;
    font-size: 12px;
    font-weight: 300;
`;
const CashOnDilivery = () => {
    return (
        <>
            <Radio />
        </>
    );
};
const Payment = ({setIsOnline}) => {
    
    return (
        <>
            <FormControls>
                <FormLabel id='demo-radio-buttons-group-label'>
                    Payment Method
                </FormLabel>
                <RadioGroup
                    aria-labelledby='demo-radio-buttons-group-label'
                    defaultValue=''
                    name='radio-buttons-group'>
                    <CashComponent>
                        <Radio onChange={(e)=>e.target.checked&&setIsOnline(false)} value='cash' />
                        <Name>
                            <span
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}>
                                <CurrencyRupeeIcon /> Cash On Dilevery
                            </span>
                            <Desc>
                                You can pay money using cash during the time of
                                dilivery.
                            </Desc>
                        </Name>
                    </CashComponent>
                    <CashComponent>
                        <Radio onChange={(e)=>e.target.checked&&setIsOnline(true)} value='online' />
                        <Name>
                            <span
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}>
                                <PaymentIcon /> Pay Online
                            </span>
                            <Desc>
                                You can pay money using cash during the time of
                                dilivery.
                            </Desc>
                        </Name>
                    </CashComponent>
                </RadioGroup>
            </FormControls>
        </>
    );
};

export default Payment;
