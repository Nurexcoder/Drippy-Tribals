// import { Button } from '@material-ui/core'
// import axios from 'axios'
import { Add, Remove } from "@material-ui/icons";
import { useState, useEffect } from "react";
import styled from "styled-components";

import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NewsLetter from "../components/NewsLetter";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import axios from "axios";
import config from "../data/config";
import { CircularProgress } from "@material-ui/core";

const Container = styled.div`
    margin: 10px 0;
`;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({
        flexDirection: "column",
        // alignItems:'flex-start',
        // justifyContent:'flex-start',
        padding: "10px 0",
    })}/* flex-direction: row; */
`;
const ImageContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 80%;
    height: auto;
    object-fit: cover;
    ${mobile({
        height: "50vh",
    })}
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
    ${mobile({
        padding: "0 20px",
    })}
`;
const Title = styled.h1`
    font-weight: 200;
    ${mobile({
        width: "100%",
        padding: "0 2px",
    })}
`;
const Desc = styled.p`
    margin: 20px 0;
    ${mobile({
        width: "100%",
        padding: "0 2px",
    })}
`;
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    ${mobile({
        width: "100%",
        padding: "0 2px",
    })}
`;
const Filter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
const FilterTitle = styled.span`
    margin: 20px;
    font-weight: 200;
    ${mobile({
        margin: "10px 2px",
    })}
`;

const FilterColorOption = styled.span`
    background-color: ${(props) => props.color};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-left: 5px;
    cursor: pointer;
`;
const FilterSize = styled.select`
    padding: 5px 15px;
    width: 70px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
    })}
`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    ${mobile({
        margin: "10px 0",
    })}
`;
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 500;

    &:hover {
        background-color: #d5dee073;
    }
`;
const Product = () => {
    const location = useLocation();

    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState();
    useEffect(() => {
        console.log("hii");
        const getProduct = async () => {
            try {
                const res = await axios.get(
                    `${config.url}/products/find/${id}`
                );
                setProduct(res.data);
                console.log(res.data);
                console.log("hiii");
            } catch (error) {
                console.log(error);
            }
        };
        getProduct();
    }, [id]);
    // console.log(product.color);
    return (
        <>
            {product && product.length !== 0 ? (
                <Container>
                    <Announcement />
                    <NavBar />
                    <Wrapper>
                        <ImageContainer>
                            <Image src={product.img} />
                        </ImageContainer>
                        <InfoContainer>
                            <Title>{product.title}</Title>
                            <Desc>{product.desc}</Desc>
                            <Price>$ {product.price}</Price>

                            <FilterContainer>
                                <Filter>
                                    <FilterTitle>Color</FilterTitle>
                                    {/* <FilterColor> */}
                                    {product.color.length !== 0 &&
                                        product.color.map((c) => {
                                            return (
                                                <FilterColorOption color={c} />
                                            );
                                        })}

                                    {/* </FilterColor> */}
                                </Filter>
                                <Filter>
                                    <FilterTitle>Size</FilterTitle>
                                    <FilterSize>
                                        {product.size &&
                                        product.size.length !== 0
                                            ? product.size.map((s) => (
                                                  <FilterSizeOption>
                                                      {s}
                                                  </FilterSizeOption>
                                              ))
                                            : ""}

                                       
                                    </FilterSize>
                                </Filter>
                            </FilterContainer>
                            <AddContainer>
                                <AmountContainer>
                                    <Remove />
                                    <Amount>1</Amount>
                                    <Add />
                                </AmountContainer>

                                <Button>Add to Card</Button>
                            </AddContainer>
                        </InfoContainer>
                    </Wrapper>
                    <NewsLetter />
                    <Footer />
                </Container>
            ) : (
                <CircularProgress />
            )}
        </>
    );
};

export default Product;
