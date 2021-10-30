const Product = require("../models/Product");
const router = require('express').Router();
const { verifyTokenAndAuth, verifyTokenAndAuthAdmin } = require("./verifyToken");

router.post("/create",verifyTokenAndAuthAdmin, async (req,res)=>{
    const newProduct = new Product({
        title:req.body.title,
        desc:req.body.desc,
        categories:req.body.categories,
        size:req.body.size,
        color:req.body.color,
        price:req.body.price
    })
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports =  router;