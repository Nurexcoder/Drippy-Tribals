const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;

    if (authHeader) {
        const token = authHeader;
        console.log(process.env.JWT_PASS);
        jwt.verify(token, process.env.JWT_PASS, (err, user) => {
            if (err) return res.status(403).json("Token is not valid");
            req.user = user;
            next();
        });
    } else {
        // console.log("hi")
        return res.status(401).json("You are not authenticated..!!");
    }
};
const verifyTokenAndAuth = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("You are not allowed to do that..!!");
        }
    });
};
const verifyTokenAndAuthAdmin = (req, res, next) => {
    console.log(req.isAdmin);
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            console.log("hi");
            res.status(405).json("Your are not allowed to do that");
        }
    });
};
module.exports = { verifyToken, verifyTokenAndAuth, verifyTokenAndAuthAdmin };
