const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Instadatabase");

const userSchema = mongoose.Schema({

    username: String,
    password: String,
    datecreated: {
        type: Date,
        default: Date.now()
    }
    
})

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;