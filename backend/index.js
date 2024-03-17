const mongoose = require("mongoose");

const userSchema = mongoose.Schema({ 
    fullname: String,
    username: String,
    password: String
})

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;