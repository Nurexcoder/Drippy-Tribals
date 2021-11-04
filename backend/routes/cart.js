const Cart = require("../models/Cart");
const router = require('express').Router();
const { verifyTokenAndAuth,verifyToken, verifyTokenAndAuthAdmin } = require("./verifyToken");

// Create cart items

router.post("/",verifyToken, async (req,res)=>{
    const newCart = new Cart(req.body)
    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (error) {
        res.status(500).json(error);
    }
})

//Update user cart item

router.put("/:id",verifyTokenAndAuth, async (req,res)=>{

    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },
        {new:true}
         )
         res.send(200).json(updatedCart);
    } catch (error) {
        res.status(500).json(error);
    }
})

//Delete user cat items

router.delete("/:id",verifyTokenAndAuth, async (req,res)=>{
    
    try {
        await Cart.findByIdAndDelete(req.params.id)
         res.send(200).json("Product has been deleted");
    } catch (error) {
        res.status(500).json(error);
    }
})

//Get user cart items

router.get("/find/:id",verifyTokenAndAuth, async (req,res)=>{
    
    try {
        const Cart = await Cart.findOne({UserId: req.params.userId})
         res.send(200).json(Cart);
    } catch (error) {
        res.status(500).json(error);
    }
})

// GET ALL

router.get('/',verifyTokenAndAuthAdmin,async(req,res)=>{
    
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);

    } 
    catch (err) {
        res.status(500).json(err);  
    }
})



module.exports =  router;