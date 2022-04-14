const Product = require("../models/Product");
const router = require("express").Router();
const { verifyTokenAndAuthAdmin } = require("./verifyToken");

router.post("/", verifyTokenAndAuthAdmin, async (req, res) => {
    // console.log("Hi");
    console.log(req.body);
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.put("/:id", verifyTokenAndAuthAdmin, async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        console.log(updatedProduct);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.delete("/:id", verifyTokenAndAuthAdmin, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted");
    } catch (error) {
        res.status(500).json(error);
    }
});
router.get("/find/:id", async (req, res) => {
    try {
        // console.log(req.params.id);
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    // try {
        let products;
        console.log(qNew,qCategory);

        if (qNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(1);
        } else if (qCategory) {
            products = await Product.find({
                categories: qCategory
            });
            console.log("Hil");
        } else {
            console.log("Found");
            products = await Product.find();
        }
        res.status(200).json(products);

    // } catch (err) {
    //     res.status(500).json(err);
    // }
});
module.exports = router;
