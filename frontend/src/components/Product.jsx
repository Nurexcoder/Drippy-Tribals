import React from "react";
import ShoppingCartOutlined from "@material-ui/icons/ShoppingCartOutlined";
import styled from "styled-components";
import { FavoriteBorderOutlined, SearchOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.7s ease;
`;
const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #939d9e;
    position: relative;
    transition: all 0.5s ease;
    &:hover {
        transform: scale(1.01);
    }
    &:hover ${Info} {
        opacity: 1;
    }
`;
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #c1c5c7;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
`;

const Image = styled.img`
    height: 75%;
    z-index: 2;
`;

const Icon = styled.div`
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;

    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
        transition: all 0.5s ease;
    }
`;
const Icons = styled.div`
    display: flex;
    flex-direction: row;
`;
const Price = styled.div`
    color: red;
`;
const Product = ({ item }) => {
    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icons>
                    <Icon>
                        <ShoppingCartOutlined />
                    </Icon>
                    <Icon>
                        <Link to={`/Product/${item._id}`}>
                            <SearchOutlined />
                        </Link>
                    </Icon>
                </Icons>
                <Price>₹ {item.price}</Price>
            </Info>
        </Container>
    );
};

export default Product;
