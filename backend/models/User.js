const mongoose = require("mongoose");
// const {boolean} = require("webidl-conversions")

const UserSchema = new mongoose.Schema(
    {
        username: { type: String },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        name:{type:String},
        isAdmin: {
            type: Boolean,
            default: true,
        },
    },

    { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);
