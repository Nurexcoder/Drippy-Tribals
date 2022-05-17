const router = require("express").Router();
const User = require("../models/User");
const CryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
    console.log(res.body);
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJs.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString(),
    });
    console.log(newUser);
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post("/login", async (req, res) => {
    try {
        console.log("hi");
        console.log(req.body.username);
        const user = await User.findOne({ username: req.body.username });
        // console.log(user);

        if (!user) {
            return res.status(401).json("Wrong Credintials.. (username)!!");
        }

        const hashedPassword = CryptoJs.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );
        const originalPassword = hashedPassword.toString(CryptoJs.enc.Utf8);
        console.log(originalPassword);

        const inputPassword = req.body.password;

        if (originalPassword !== inputPassword) {
            return res.status(401).json("Wrong Password");
        }
        console.log("Hi");
        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_SEC
        );

        const { password, ...others } = user._doc;
        res.status(200).json({ ...others, accessToken });
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
