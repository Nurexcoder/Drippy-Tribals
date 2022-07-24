import React, { useState } from "react";
import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@material-ui/icons/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@material-ui/icons/ArrowRightOutlined";
import { datas } from "../data";
import { mobile } from "../responsive";
import { WhatsappOutlined } from "@mui/icons-material";
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    /* background-color: coral; */
    position: relative;
    overflow: hidden;
    ${mobile({
        height: "45vh",
    })}
`;
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    /* flex-direction: row; */
    justify-content: center;
    align-items: center;
    background-color: #fff7f7a9;
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translate(${(props) => props.slideIndex * -100}vw);
    transition: all 1.5s ease;
    /* flex-direction: column; */
    /* justify-content: center;
align-items: center; */
`;
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    background-color: #${(props) => props.bg};
    ${mobile({
        height: "100%",
        alignItems: "center",
    })}
`;
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`;
const Image = styled.img`
    height: 80%;
    width: auto;
    ${mobile({
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2px",
    })}
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    ${mobile({
        padding: "10px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
    })}
`;
const Title = styled.h1`
    font-size: 70px;
    ${mobile({
        fontSize: "18px",
    })}
`;
const Description = styled.p`
    margin: 20px 0;
    font-size: 20px;
    letter-spacing: 3px;
    font-weight: 500;
    ${mobile({
        fontSize: "12px",
        margin: "12px 0",
        letterSpacing: "1px",
    })}
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    outline: none;
    cursor: pointer;

    ${mobile({
        fontSize: "12px",
        padding: "5px",
    })}
`;

const Phone = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    /* justify-content: flex-start;
    align-items: flex-start; */
`;
const Message = styled.div``;
const PhoneNo = styled.div`
     display: flex;
    /* justify-content: center; */
    align-items: center; 
`;
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };
    return (
        <Container>
            <Arrow direction='left' onClick={() => handleClick("left")}>
                <ArrowLeftOutlinedIcon />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {datas.map((data) => (
                    <Slide bg={data.bg} key={data.id}>
                        <ImgContainer>
                            <Image src={data.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{data.title}</Title>
                            <Description>{data.desc}</Description>
                            <Phone>
                                <Message>Your can also order using:</Message>
                                <PhoneNo>
                                    <WhatsappOutlined />
                                    {data.ph}
                                </PhoneNo>
                            </Phone>
                            <Button>Shop Now</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction='right' onClick={() => handleClick("right")}>
                <ArrowRightOutlinedIcon />
            </Arrow>
        </Container>
    );
};

export default Slider;
