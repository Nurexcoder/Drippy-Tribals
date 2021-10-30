const express = require('express')
const mongoose= require('mongoose')
const dotenv= require('dotenv')
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');
const { json } = require('express');
const app = express();
dotenv.config();

mongoose.connect(
    process.env.MONGO_URL2
    ).then(()=>console.log("Db connected"))
    .catch((err) => {console.log(err)});
app.use(express.json());
    
app.use('/api/users',userRouter);
app.use('/api/auth',authRouter);



app.listen(process.env.PORT||5000,()=>{
    console.log("Backend running in 5000")
})

