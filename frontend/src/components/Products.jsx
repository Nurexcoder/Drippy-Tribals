// import axios from "axios";
// import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import {mobile} from '../responsive'
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    ${mobile({
        padding:'2px'
    })}
`;
const Products = ({ cat, filter, sort }) => {
    // const [product, setProduct] = useState("");
    // const [filteredProducts, setFilteredProducts] = useState("");

    // console.log("hi");
    // useEffect(() => {
    //     console.log("hii");
    //     const getProducts = async () => {
    //         try {
    //             const res = await axios.get(
    //                 "http://localhost:5000/api/products"
    //             );
    //             setProduct(res.data);
    //             console.log(res.data);
    //             console.log("hiii");
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     getProducts();
    // }, [cat, filter, sort]);
    // // console.log(product)
    return (
        <Container>
            {popularProducts.map((item) => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
    );
};

export default Products;
