const mongoose = require("mongoose");
require("dotenv/config");

const mongoose_URI = process.env.MONGO_URL;
// console.log(mongoose_URI);
// mongoose_URI = "mongodb+srv://developer:developer@cluster0.2logr.mongodb.net/pyp-db?retryWrites=true&w=majority";
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
