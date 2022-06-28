import { Add, Remove } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { mobile } from "../responsive";
import axios from "axios";
import { Link } from "react-router-dom";

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({
        display: "flex",
        flexDirection: "column",
    })}
`;
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    ${mobile({
        padding: " 20px 0px",
    })}
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) =>
        props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
    outline: 0.5px;
    border: 1px solid black;
    ${mobile({
        padding: " 3px ",
        fontSize: "12px",
        width: "25%",
        fontWeight: "600",
    })}
`;
const TopTexts = styled.div`
    ${mobile({
        display: "flex",
        flexDirection: "column",
    })}
`;
const TopText = styled.span`
    text-decoration: underline;
    margin: 0 5px;
    ${mobile({
        fontSize: "12px",
        fontWeight: "600",
        margin: "3px 0px",
    })}/* text-align: center; */
`;
const Bottom = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    ${mobile({
        display: "flex",
        flexDirection: "column-reverse",
    })}/* position: relative; */
`;
const Info = styled.div`
    flex: 3;
`;
const Hr = styled.hr`
    color: #b1aeae73;
    font-weight: 100;
    margin: 10px;
    height: 1px;
`;
const Product = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
const ProductDetails = styled.div`
    flex: 2;
    display: flex;
    ${mobile({
        flex: "3",
    })}
`;
const Image = styled.img`
    width: 30%;
    ${mobile({
        width: "60%",
        height: "auto",
    })}
`;
const Details = styled.span`
    padding: 20px;
    display: flex;
    flex-direction: column;
    ${mobile({
        padding: "20px 0",
    })}
`;
const ProductName = styled.span`
    font-weight: 100;
    padding: 10px;
    ${mobile({
        padding: "5px",
    })}
`;
const ProductId = styled.span`
    padding: 10px;
`;
const ProductSize = styled.span`
    padding: 10px;
`;
const Color = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 10px 5px;
`;
const PriceDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
`;
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    ${mobile({
        padding: "20px 0",
    })}
`;
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({
        fontSize: "18px",
    })}
`;
const Price = styled.div`
    font-size: 42px;
    font-weight: 300;
    ${mobile({
        fontSize: "24px",
        margin: "0",
    })}
`;
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid #3d4856;
    padding: 20px;
    height: 65vh;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: space-between;
`;
const SummaryItem = styled.h4`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* padding: 10px 5px; */
    /* justify-content: center; */
`;
const SummaryTitle = styled.h1``;
const SummaryItemText = styled.h3`
    font-size: 20px;
    /* font-weight: 300; */
    padding: 4px;
    font-weight: ${(props) => (props.type === "total" ? "900" : "300")};
    font-size: ${(props) => (props.type === "total" ? "24px" : "20px")};
`;
const SummaryPrice = styled.h1`
    font-weight: ${(props) => (props.type === "total" ? "900" : "300")};
    font-size: ${(props) => (props.type === "total" ? "24px" : "20px")};
    padding: 10px;
`;
const Button = styled.button`
    padding: 15px 10px;
    width: 100%;
    background-color: #008080e4;
    color: white;
    /* outline: none; */
    border: 0.5px solid teal;
`;
// const B = styled.span`
//     margin-right: 20px;

// `

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const user = useSelector((state) => state.user);

    console.log(user);
    const logo = "/a.png";
    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        const result = await axios.post(
            "http://localhost:5000/api/payment/orders",
            { ...cart }
        );

        if (!result) {
            alert("Server error. Are you online?");
            return;
        }

        const { amount, id: order_id, currency } = result.data;

        const options = {
            key: "rzp_live_mQyoFR1DwIgL5m", // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: "Soumya Corp.",
            description: "Test Transaction",
            image: { logo },
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                    cart,
                };

                const result = await axios.post(
                    "http://localhost:5000/api/payment/success",
                    data
                );

                alert(result.data.msg);
            },
            prefill: {
                name: "Hibjul Ahmed",
                email: "hibjulahmed@gmail.com",
                contact: user.phone || "9999999999",
            },
            notes: {
                address: user.address || "Soumya Dey Corporate Office",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }
    return (
        <Container>
            <NavBar />
            <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPING</TopButton>
                    <TopTexts>
                        <TopText>SHOPPING BAG({cart.quantity})</TopText>
                        <TopText>YOUR WISHLIST(0)</TopText>
                    </TopTexts>
                    <Link to='/checkout'>
                        <TopButton type='filled'>CHECKOUT NOW</TopButton>
                    </Link>
                </Top>
                <Bottom>
                    <Info>
                        {cart &&
                            cart.products.map((product) => (
                                <>
                                    <Product>
                                        <ProductDetails>
                                            <Image src={product.img} />
                                            <Details>
                                                <ProductName>
                                                    <b>PRODUCT:</b>{" "}
                                                    {product.title}
                                                </ProductName>
                                                {/* <ProductId>
                                                    <b>ID:</b> 12121110
                                                </ProductId> */}
                                                <Color color={product.color} />
                                                <ProductSize>
                                                    <b>SIZE:</b> {product.size}
                                                </ProductSize>
                                            </Details>
                                        </ProductDetails>
                                        <PriceDetails>
                                            <ProductAmountContainer>
                                                <Add />
                                                <ProductAmount>
                                                    {product.quantity}
                                                </ProductAmount>
                                                <Remove />
                                            </ProductAmountContainer>
                                            <Price>${product.price}</Price>
                                        </PriceDetails>
                                    </Product>
                                    <Hr />
                                </>
                            ))}
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>SUB TOTAL</SummaryItemText>
                            <SummaryPrice>${cart.total}</SummaryPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>
                                ESTIMATED SHIPPING
                            </SummaryItemText>
                            <SummaryPrice>${cart.shift || 0}</SummaryPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>SHIPPING DISCOUNT</SummaryItemText>
                            <SummaryPrice>-${cart.discount || 0}</SummaryPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText type='total'>
                                TOTAL
                            </SummaryItemText>
                            <SummaryPrice type='total'>
                                ${cart.total}
                            </SummaryPrice>
                        </SummaryItem>
                        <Link to='/checkout'>
                            <Button>CHECKOUT NOW</Button>
                        </Link>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Cart;
