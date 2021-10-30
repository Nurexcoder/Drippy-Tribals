// import { Button } from '@material-ui/core'
import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import NewsLetter from '../components/NewsLetter'
import { categories } from '../data'

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    /* flex-direction: row; */

    `
const ImageContainer = styled.div`
    flex:1;
    `
const Image = styled.img`

    width: 100%;
    height: 90vh;
    object-fit: cover;

    `
const InfoContainer = styled.div`
    flex:1;
    padding: 0 50px;
    `
const Title = styled.h1`
    font-weight: 200;
    `
const Desc = styled.p`
    margin: 20px 0;
    `
const Price = styled.span`
font-weight:100;
font-size: 40px;
`
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
`
const Filter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
`
const FilterTitle = styled.span`
    margin: 20px;
    font-weight: 200;
    `
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    outline: none;
    `
const FilterColorOption = styled.span ` 
        background-color: ${props=>props.color};
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-left:5px;
        cursor: pointer;
        `
const FilterSize = styled.select `
    padding: 5px 15px;
    width: 70px;

`
const FilterSizeOption = styled.option `
    
`
const AddContainer = styled.div ` 
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    `
const AmountContainer = styled.div ` 
    display: flex;
    align-items: center;
    font-weight: 700;
    `
const Amount = styled.span `  
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
    `
const Button = styled.button ` 
    padding:15px;
    border: 2px solid teal;
    background-color: white;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 500;

    &:hover{
            background-color: #d5dee073;
    }
  
`;
const Product = () => {

    return (
        <Container>
            <Announcement />
            <NavBar />
            <Wrapper>
                <ImageContainer>
                    <Image src='https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                </ImageContainer>
                <InfoContainer>
                    <Title>Lorem ipsum dolor sit amet.</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisici
                        ng elit. Vero impedit rerum tempora, aliquid ea
                        exercitationem!</Desc>
                    <Price>$20</Price>


                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {/* <FilterColor> */}
                                <FilterColorOption color="black" />
                                <FilterColorOption color="grey" />
                                <FilterColorOption color="blue" />
                            {/* </FilterColor> */}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                                <FilterSizeOption>XXL</FilterSizeOption>
                                <FilterSizeOption>XXXL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>

                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                        </AmountContainer>

                    <Button>Add to Card</Button>
                    </AddContainer>
                </InfoContainer>


            </Wrapper>
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default Product
