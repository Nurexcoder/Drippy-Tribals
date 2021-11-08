import {React,useState} from 'react'
import { useLocation } from 'react-router'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'

const Container = styled.div `
    
`
const Title = styled.h1 `
    /* text-align: center; */
    margin: 20px;
    
`
const FilterContainer = styled.div `
    display: flex;
    flex-direction: row;

    justify-content: space-between;
`
const Filter = styled.div `
    margin: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    `
const FilterText= styled.h3 `
    font-size:20px;
    font-weight: 600;
    margin-right: 20px;
    
`    
const Select = styled.select `
    margin-right: 20px;
    padding: 10px;
`    
const Option = styled.option `
    margin:30px;
    /*  */
    `    
// const     
const ProductList = () => {
    const location = useLocation();
    const [filter,setFilter] = useState('')
    const [sort, setSort] = useState('')
    const cat = location.pathname.split('/')[2]
    
    const handleFilters=(e)=>{
        const value = e.target.value
        setFilter({
            ...filter,
            
            [e.target.name]:value
        })
        
    }
    return (
        <Container>
            <Announcement/>
            <NavBar/>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>
                    Filter Products::  </FilterText>
                    <Select name="color" onChange={handleFilters}>
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

                    <Select name="size" onChange={handleFilters}>
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
                    <FilterText>
                    Sort Products::
                    </FilterText>
                <Select onChange={(e)=>{setSort(e.target.value)
                     }}>
                    <Option selected>Newest</Option>
                    <Option value="asc">Price(asc)</Option>
                    <Option value="desc">Price(desc)</Option>
                </Select>
                </Filter>
            </FilterContainer>
        <Products cat={cat} filter={filter} sort={sort}/>
        <NewsLetter/>
        <Footer/>
        </Container>
    )
}

export default ProductList
