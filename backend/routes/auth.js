const router = require("express").Router();
const User = require("../models/User");
const CryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");
router.post("/register",async (req,res)=>{
    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    });
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        
        res.status(500).json(error);
    }

})

router.post("/login", async (req,res)=>{
   try {
       
    const user = await User.findOne({username:req.body.username});
    // console.log(user)
    
    !user && res.status(401).json("Wrong Credintials.. (username)!!");
    
    
    // const hashedPassword = CryptoJs.AES.decrypt(
    //     user.password,
    //     process.env.PassSec
    //     );
        const Originalpassword = user.password 
        // hashedPassword.toString(CryptoJs.enc.Utf8);
        Originalpassword !== req.body.password
             && res.status(401).json("Wrong Credintials..!!");
        const accessToken = jwt.sign(
            {
                id:user._id,
                isAdmin:user.isAdmin,
            },
            process.env.jwtPass
            );
        
        const {password, ...others} = user._doc;      
        res.status(200).json({accessToken,others});
   } catch (error) {
       res.status(400).send(error)
   }
})

module.exports = router;