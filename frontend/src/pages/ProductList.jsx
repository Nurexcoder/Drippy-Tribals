import { React, useState,useEffect } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import { mobile } from "../responsive";

const Container = styled.div``;
const Title = styled.h1`
    /* text-align: center; */
    margin: 20px;
    ${mobile({
        textAlign: "center",
    })}
`;
const FilterContainer = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    ${mobile({
        flexDirection: "column",
        alignItems: "flex-start",
    })}
`;
const Filter = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    ${mobile({
        margin: "10px 12px",
    })}
`;
const FilterText = styled.h3`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({
        fontSize: "12px",
    })}
`;
const Select = styled.select`
    margin-right: 20px;
    padding: 10px;
    ${mobile({
        padding: "5px",
    })}
`;
const Option = styled.option`
    margin: 30px;
    /*  */
`;
// const
const ProductList = () => {
    const location = useLocation();
    console.log(location.pathname);
    const [filters, setFilters] = useState("");
    const [sort, setSort] = useState("newest");
    const [cate, setCate] = useState()
    const cat = location.pathname.split("/")[2];
    useEffect(() => {
        setCate(cat)
    }, [location])
    

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };
    console.log(filters);
    return (
        <Container>
            <Announcement />
            <NavBar />
            <Title>{cat.toLocaleUpperCase()}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:: </FilterText>
                    <Select name='color' onChange={handleFilters}>
                        <Option disabled selected>
                            Color
                        </Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Blue</Option>
                        <Option>Green</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>

                    <Select name='size' onChange={handleFilters}>
                        <Option disabled selected>
                            SIZE
                        </Option>
                        <Option>S</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                        <Option>XXXL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products::</FilterText>
                    <Select
                        onChange={(e) => {
                            setSort(e.target.value);
                        }}>
                        <Option selected value="newest">Newest</Option>
                        <Option value='asc'>Price(asc)</Option>
                        <Option value='desc'>Price(desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort} />
            <NewsLetter />
            <Footer />
        </Container>
    );
};

export default ProductList;
