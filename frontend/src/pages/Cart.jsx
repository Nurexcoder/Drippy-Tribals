import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'


const Container = styled.div``
const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    font-weight: 300;
    text-align:center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === 'filled' && 'none'};
    background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
    color: ${props => props.type === 'filled' && 'white'};


`
const TopTexts = styled.div``
const TopText = styled.span`
    text-decoration: underline;
    margin: 0 10px;
`
const Bottom = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    /* position: relative; */
`
const Info = styled.div`
    flex: 3;
`
const Hr = styled.hr`
    color: #b1aeae73;
    font-weight: 100;
    margin: 10px ;
    height: 1px;
`
const Product = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
`
const ProductDetails = styled.div` 
    flex:2;
    display: flex;

    `
const Image = styled.img` 
    width: 30%;
`
const Details = styled.span`
    padding: 20px;
    display: flex;
    flex-direction: column;
    
    `
const ProductName = styled.span`
        font-weight: 100;
        padding: 10px;
        `
const ProductId = styled.span`
    padding: 10px;
`
const ProductSize = styled.span`
    padding: 10px;
    `
const Color = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: pink;
    margin: 10px 5px;
    `
const PriceDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    flex: 1;
    
    `
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    `
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    `
const Price = styled.div`
    font-size: 42px;
    font-weight: 300;
    `
    const Summary = styled.div`
        flex: 1;
        border: 0.5px solid #3D4856 ;
        padding: 20px;
        height: 65vh;
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        justify-content: space-between;
        
        `
const SummaryItem = styled.h4 `
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* padding: 10px 5px; */
    /* justify-content: center; */
`
const SummaryTitle = styled.h1 `

`
const SummaryItemText = styled.h3 `
    font-size: 20px;
    /* font-weight: 300; */
    padding: 4px;
    font-weight:${props=>props.type==='total'?'900':'300'};
    font-size: ${props=>props.type==='total'?'24px':'20px'};
`
const SummaryPrice = styled.h1 `
   font-weight:${props=>props.type==='total'?'900':'300'};
    font-size: ${props=>props.type==='total'?'24px':'20px'};
    padding: 10px;
`
const Button = styled.button `
    
    padding: 15px 10px;
    width: 100%;
    background-color: #008080e4;
    color: white;
    /* outline: none; */
    border: 0.5px solid teal;
`
// const B = styled.span`
//     margin-right: 20px;

// `

const Cart = () => {
    return (
        <Container>
            <NavBar />
            <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPING</TopButton>
                    <TopTexts>
                        <TopText>SHOPPING BAG(2)</TopText>
                        <TopText>YOUR WISHLIST(0)</TopText>
                    </TopTexts>
                    <TopButton type='filled'>CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetails>
                                <Image src='https://i.ibb.co/cXFnLLV/3.png' />
                                <Details>
                                    <ProductName>
                                        <b>PRODUCT:</b> JESSIE THUNDER SHOES
                                    </ProductName>
                                    <ProductId><b>ID:</b>  12121110</ProductId>
                                    <Color />
                                    <ProductSize><b>SIZE:</b>         XL</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <Price>$20</Price>
                            </PriceDetails>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetails>
                                <Image src='https://i.ibb.co/cXFnLLV/3.png' />
                                <Details>
                                    <ProductName>
                                        <b>PRODUCT:</b> JESSIE THUNDER SHOES
                                    </ProductName>
                                    <ProductId><b>ID:</b>  12121110</ProductId>
                                    <Color />
                                    <ProductSize><b>SIZE:</b>         XL</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <Price>$20</Price>
                            </PriceDetails>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetails>
                                <Image src='https://i.ibb.co/cXFnLLV/3.png' />
                                <Details>
                                    <ProductName>
                                        <b>PRODUCT:</b> JESSIE THUNDER SHOES
                                    </ProductName>
                                    <ProductId><b>ID:</b>  12121110</ProductId>
                                    <Color />
                                    <ProductSize><b>SIZE:</b>         XL</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <Price>$20</Price>
                            </PriceDetails>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetails>
                                <Image src='https://i.ibb.co/cXFnLLV/3.png' />
                                <Details>
                                    <ProductName>
                                        <b>PRODUCT:</b> JESSIE THUNDER SHOES
                                    </ProductName>
                                    <ProductId><b>ID:</b>  12121110</ProductId>
                                    <Color />
                                    <ProductSize><b>SIZE:</b>         XL</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <Price>$20</Price>
                            </PriceDetails>
                        </Product>



                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>SUB TOTAL</SummaryItemText>
                            <SummaryPrice>$40</SummaryPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>ESTIMATED SHIPPING</SummaryItemText>
                            <SummaryPrice>$10</SummaryPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>SHIPPING DISCOUNT</SummaryItemText>
                            <SummaryPrice>-$10</SummaryPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText type="total">TOTAL</SummaryItemText>
                            <SummaryPrice type="total">$40</SummaryPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />

        </Container>
    )
}

export default Cart
