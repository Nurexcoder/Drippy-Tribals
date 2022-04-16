const mongoose = require("mongoose");
require("dotenv/config");

const mongoose_URI = process.env.MONGO_URL;

const mongoConnect = async () => {
    // try {
        await mongoose.connect(
            mongoose_URI,
            () => {
                console.log("Connected to mongo Successfully!");
            }
        );
        console.log("Connected");
    // } catch (error) {
    //     console.error();
    //     console.log("Hi");
    // }
};

module.exports = mongoConnect;
