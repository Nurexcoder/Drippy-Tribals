const mongoose = require("mongoose");
const Order = require("./models/Order");
require("dotenv/config");

const mongoose_URI = process.env.MONGO_URL;
console.log(mongoose_URI);
const mongoConnect = async () => {
    try {
        await mongoose.connect(mongoose_URI, () => {
            console.log("Connected to mongo Successfully!");
        });
    } catch (error) {
        console.error();
        console.log("Hi");
    }
};

module.exports = mongoConnect;
