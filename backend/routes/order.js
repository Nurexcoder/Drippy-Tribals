const Order = require("../models/Order");
const router = require('express').Router();
const { verifyTokenAndAuth,verifyToken, verifyTokenAndAuthAdmin } = require("./verifyToken");

// Create Order items

router.post("/",verifyToken, async (req,res)=>{
    console.log("Hi");
    const newOrder = new Order(req.body)
    console.log(req.body);
    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (error) {
        res.status(500).json(error);
    }
})

//Update user Order item

router.put("/:id",verifyTokenAndAuthAdmin, async (req,res)=>{

    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },
        {new:true}
         )
         res.send(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json(error);
    }
})

//Delete user cat items

router.delete("/:id",verifyTokenAndAuth, async (req,res)=>{
    
    try {
        await Order.findByIdAndDelete(req.params.id)
         res.send(200).json("Product has been deleted");
    } catch (error) {
        res.status(500).json(error);
    }
})

//Get user User items

router.get("/find/:id",verifyTokenAndAuth, async (req,res)=>{
    
    try {
        const Orders = await Order.find({UserId: req.params.userId})
         res.send(200).json(Orders);
    } catch (error) {
        res.status(500).json(error);
    }
})

// GET ALL

router.get('/',verifyTokenAndAuthAdmin,async(req,res)=>{
    
    try {
        const Orders = await Order.find();
        console.log(Orders)
        res.status(200).json(Orders);

    } 
    catch (err) {
        res.status(500).json(err);  
    }
})

router.get("/income",verifyTokenAndAuthAdmin,async(req,res)=>{

    const date =  new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth()-1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth()-1));

    try {
        
        const income = await Order.aggregate([
            { $match: { createdAt: { previousMonth } } },
            {
                   $project:{
                    month:{ $month:"$CreatedAt" },
                    sales:"$amount",
                }, 
                
                    $group:{
                        _id:"$month",
                        total:{$sum: "$sales"}
                    }
                }   
            
        ]);
        res.status(200).json(income)

    } catch (error) {
        
        res.status(500).json(error);

    }

})



module.exports =  router;