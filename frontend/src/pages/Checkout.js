import { Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Payment from "../components/Payment";
import ShippingAdress from "../components/ShippingAdress";
import config from "../data/config";

const Component = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 20px 25%;
`;
const SubmitButton = styled(Button)`
    margin: 20px 10px !important;
`;
const Checkout = () => {
    const cart = useSelector((state) => state.cart);
    const user = useSelector((state) => state.user);
    const [isOnline, setIsOnline] = useState(true);
    const [address, setAddress] = useState();
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

    async function displayRazorpay(e) {
        console.log("Hi");
        let products = [];
        cart.products.map((product) => {
            products.push({
                productId: product._id,
                quantity: product.quantity,
            });
        });
        const address = {
            name: e.target.firstName.value + " " + e.target.lastName.value,
            email: e.target.email.value,
            street: e.target.sAddress.value,
            village: e.target.village.value,
            state: e.target.state.value,
            district: e.target.dist.value,
            phoneNo: e.target.phone.value,
            alternatePhoneNo: e.target.aPhone.value,
        };
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        const result = await axios.post(
            "https://envtestfrom.herokuapp.com/api/payment/orders",
            { ...cart },
            {
                headers: {
                    authorization: "Barear " + user.currentUser.accessToken,
                },
            }
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
                    userID: user.currentUser._id,
                    products: products,
                    amount: cart.total,
                    address: address,
                    status: "Paid",
                };

                const result = await axios.post(
                    "https://envtestfrom.herokuapp.com/api/payment/success",
                    { ...data },
                    {
                        headers: {
                            authorization:
                                "Barear " + user.currentUser.accessToken,
                        },
                    }
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

    console.log(cart);
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e.target.firstName.value);
        const products = [];
        cart.products.map((product) => {
            products.push({
                productId: product._id,
                quantity: product.quantity,
            });
        });
        const address = {
            name: e.target.firstName.value + " " + e.target.lastName.value,
            email: e.target.email.value,
            street: e.target.sAddress.value,
            village: e.target.village.value,
            state: e.target.state.value,
            district: e.target.dist.value,
            phoneNo: e.target.phone.value,
            alternatePhoneNo: e.target.aPhone.value,
        };
        if (isOnline) {
            const isPaid = await displayRazorpay(e);
        } else {
            const res = await axios.post(
                `${config.url}/orders`,
                {
                    userID: user.currentUser._id,
                    products: products,
                    amount: cart.total,
                    address: address,
                    status: "Not Paid",
                },
                {
                    headers: {
                        authorization: "Barear " + user.currentUser.accessToken,
                    },
                }
            );
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            {/* <NavBar /> */}
            <Component>
                <ShippingAdress />
                <Payment setIsOnline={setIsOnline} />
                <SubmitButton
                    type='submit'
                    variant='contained'
                    color={isOnline ? "primary" : "success"}>
                    {isOnline ? "Proceed" : "Confirm Order"}
                </SubmitButton>
            </Component>
        </form>
    );
};

export default Checkout;
