import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { mobile } from "../responsive";
import config from "../data/config";
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    ${mobile({
        padding: "2px",
    })}
`;
const Products = ({ cat, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    console.log(config);
    // console.log("hi");
    useEffect(() => {
        console.log("hii");
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    cat
                        ? `${config.url}/api/products?category=${cat}`
                        : `${config.url}/api/products`
                );
                setProducts(res.data);
                console.log(res.data);
                console.log("hiii");
            } catch (error) {
                console.log(error);
            }
        };
        getProducts();
    }, [cat, filters, sort]);
    useEffect(() => {
        cat &&
            setFilteredProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) => {
                        item[key].includes(value);
                    })
                )
            );
    }, [products]);
    console.log(products);
    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
        } else if (sort === "asc") {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            );
        } else {
            setFilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort]);

    return (
        <Container>
            {products.map((item) => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
    );
};

export default Products;
