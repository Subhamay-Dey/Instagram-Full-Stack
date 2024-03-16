const mongoose = require("mongoose");

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