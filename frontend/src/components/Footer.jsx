import {
    Facebook,
    Instagram,
    Mail,
    Phone,
    Pinterest,
    Room,
    Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
const Container = styled.div`
    margin-top: 20px;
    display: flex;
    /* background-color: #d8edf5; */
    ${mobile({
        flexDirection: "column",
    })}
    color:black;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    padding: 20px;
    ${mobile({
        padding: "10px",
    })}
`;
const Logo = styled.h1`
    ${mobile({
        textAlign: "center",
    })}
`;

const Desc = styled.p`
    margin: 20px 0;
    ${mobile({
        padding:'12px 6px'
    })}
`;
const SocialContainer = styled.div`
    display: flex;
    ${mobile({
       justifyContent:'space-evenly'
    })}
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 2px;
`;
const Center = styled.div`
    flex: 1;
    padding: 20px;
`;
const Title = styled.h3`
    margin-bottom: 30px;
    ${mobile({
        textAlign:'center',
        width:'100%'
    })}
`;
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    ${mobile({
        justifyContent:'flex-end',
        alignItems:'flex-end'
    })}
`;
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 25px;
    ${mobile({
        textAlign:'center'
    })}
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    padding: 20px;
    
    
`;
const ContactItem = styled.div`
    margin-bottom: 25px;
    ${mobile({
        padding:'0 10px',
        display:'flex',
        alignItems:'flex-start',
        justifyContent:'center'
    })}
`;
const Payment = styled.img`
    width: 50%;
    ${mobile({
        padding:'0 10px'
    })}
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Fruit Fresh</Logo>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis dolores, odio modi, possimus blanditiis nulla
                    repellat ullam aperiam molestiae tempora soluta illum.
                    Obcaecati aspernatur dolore veritatis fugit facere
                    consectetur quas error impedit.
                </Desc>
                <SocialContainer>
                    <SocialIcon color='4267B2'>
                        <Facebook />
                    </SocialIcon>

                    <SocialIcon color='E4405F'>
                        <Instagram />
                    </SocialIcon>

                    <SocialIcon color='55ACEE'>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color='E60023'>
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>

            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: "30px" }} />
                    Gopinath Bordoloi Nagar, Jalukbari, Guwahati, Assam 781014
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "30px" }} /> +91 9365722374*
                </ContactItem>
                <ContactItem>
                    <Mail style={{ marginRight: "30px" }} /> hehehaha@gmil.com
                </ContactItem>
                <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
            </Right>
        </Container>
    );
};

export default Footer;
