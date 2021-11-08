const express = require('express')
const mongoose= require('mongoose')
const dotenv= require('dotenv')
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const orderRoute = require('./routes/order');
const cartRoute = require('./routes/cart');
const stripeRoute = require('./routes/stripe');
const cors = require('cors');


const app = express();
dotenv.config();

mongoose.connect(
    process.env.MONGO_URL2
    ).then(()=>console.log("Db connected"))
    .catch((err) => {console.log(err)});
app.use(cors)
app.use(express.json());
    
app.use('/api/users',userRoute);
app.use('/api/auth',authRoute);
app.use('/api/products',productRoute);
app.use('/api/orders',orderRoute);
app.use('/api/carts',cartRoute);
app.use('/api/checkout',stripeRoute);


app.listen(5000,()=>{
    console.log("Backend running in 5000")
})

