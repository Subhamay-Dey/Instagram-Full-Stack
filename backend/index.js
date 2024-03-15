const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Instadatabase");

const userSchema = mongoose.Schema({
    name: String,
    password: String,
    gmail: String,
})

module.exports= mongoose.model("User", userSchema);