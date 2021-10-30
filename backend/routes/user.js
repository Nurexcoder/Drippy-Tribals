// const { json } = require("express");
const User = require("../models/User");
const { verifyToken, verifyTokenAndAuth, verifyTokenAndAuthAdmin } = require("./verifyToken");

const router = require("express").Router();


router.put("/:id",verifyTokenAndAuth, async (req,res)=>{

    if(req.body.password){
        req.body.password=CryptoJs.AES.encrypt(
            req.body.password,
            process.env.PassSec)
            .toString()
    
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },
        {new:true}
         )
         res.send(200).json(updatedUser);
    } catch (error) {
        res.status(500).json(error);
    }
})
router.delete("/:id",verifyTokenAndAuth, async (req,res)=>{
    
    try {
        await User.findByIdAndDelete(req.params.id)
         res.send(200).json("User has been deleted");
    } catch (error) {
        res.status(500).json(error);
    }
})
router.get("/:id",verifyTokenAndAuth, async (req,res)=>{
    
    try {
        const user = await User.findById(req.params.id)
         res.send(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.get("/",verifyTokenAndAuthAdmin, async (req,res)=>{
    const quary = req.query.new;
    try {
        const users =  quary? await User.find().sort({_id:-1}).limit(2):await User.find()
        // console.log(users);
         res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
});


router.get("/stats" , verifyTokenAndAuthAdmin, async (req, res) => {
    console.log("jo")
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  
    try {
      const data = await User.aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);
      res.status(200).json(data)
    } 
    catch (err) {
        console.log("hi")
      res.status(500).json(err);
    }
  });


module.exports = router; 