import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Badge } from '@material-ui/core';
const Container = styled.div`
        height:60px; 
        margin:0px; 
    
            
`

const Wrapper= styled.div`
        padding:10px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `
const Left = styled.div`
    flex: 1;
    display:flex;
    
    align-items: center;

    `
const Center = styled.div`
    flex:1;
    `
const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    `
const Language = styled.span`
        font-size: 14px;
        cursor: pointer;
        margin-right:20px;
        `
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
     
`  
const Input = styled.input `
    border: none;
` 
const Logo =  styled.h1 `
    font-style:bold;
    text-align:center;
    `  
const ManuItems= styled.div `
    font-size:14px;
    cursor: pointer;
    margin:0 7px;
    `       
const NavBar = () => {
    return (
       <Container>
           <Wrapper>
           <Left><Language>EN
               </Language>
               <SearchContainer>
               <Input/>
               <SearchIcon style={{color:"grey",fontSize:'16px'} }/>
               </SearchContainer></Left>
           <Center><Logo>Shopify</Logo></Center>
           <Right>
               <ManuItems>REGISTER</ManuItems>
               <ManuItems>SIGN IN</ManuItems>
               <Badge badgeContent= {3} color="primary">
               <ShoppingCartOutlinedIcon/>
                             </Badge>
            </Right>
           </Wrapper>
       </Container>
    )
}

export default NavBar
