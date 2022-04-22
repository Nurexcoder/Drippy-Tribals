const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const cartRoute = require("./routes/cart");
const stripeRoute = require("./routes/stripe");
const mongoConnect = require("./db");
const cors = require("cors");

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
mongoConnect();
const PORT = 5000;

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/carts", cartRoute);
app.use("/api/checkout", stripeRoute);
app.get("/", (req, res) => {
    console.log("Hello");
    res.send("hello");
});
app.listen(PORT, () =>
    console.log(`Server Running on Port: http://localhost:${PORT}`)
);
