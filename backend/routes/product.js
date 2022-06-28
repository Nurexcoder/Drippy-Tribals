const Product = require("../models/Product");
const router = require("express").Router();
const { verifyTokenAndAuthAdmin } = require("./verifyToken");
const {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
} = require("firebase/storage");
const multer = require("multer");
const storage = getStorage();

router.post(
    "/",
    [verifyTokenAndAuthAdmin, multer().single("file")],
    async (req, res) => {
        // console.log("Hi");
        console.log(req.body);
        let metadata = {
            contentType: req.file.mimetype,
            name: req.file.originalname,
        };
        console.log(metadata)
        // const newProduct = new Product(req.body);
        try {
            const storageRef = ref(storage, `${req.file.originalname}`);
            const snapshot = await uploadBytes(
                storageRef,
                req.file.buffer,
                metadata
            );
            const downloadUrl = await getDownloadURL(snapshot.ref);
            console.log(downloadUrl);
            const newProduct = await Product.create({
                img: downloadUrl,
                title: req.body.title,
                desc: req.body.desc,
                categories: req.body.categories,
                price: req.body.price,
                availablePieces: req.body.availablePieces,
                inStock:req.body.inStock,

            });
            // const savedProduct = await newProduct.save();
            res.status(200).json(newProduct);
        } catch (error) {
            res.status(500).json(error);
        }
    }
);

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
    console.log(qNew, qCategory);

    
    if (qNew) {
        products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
        products = await Product.find({
            categories: qCategory,
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
