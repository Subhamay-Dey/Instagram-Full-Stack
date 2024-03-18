const express = require("express");
const app = express();
const body_parser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const UserModel = require("./index");
const bcrypt = require("bcrypt");
const postsModel = require("./posts");

const PORT = 3000 || process.env.PORT;

mongoose.connect("mongodb://127.0.0.1:27017/Instadatabase");

app.use(bodyParser.json());
app.use(cors());

const session = require("express-session");

app.use(session({
    resave: false,
    saveUninitiated: false,
    secret: "secret",
}));

app.post("/login", async function(req, res){
    var {username, password} = req.body;

    try{
        const user = await UserModel.findOne({username, password});
        
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
            req.session.user = {username: user.username, password: user.password};

            res.json({message:"Login successfull"});
    }
    catch(error){
        console.log(error);
        res.status(501).json({message: "Server error"});
    }
})

const register = async(req, res) => {

    const {fullname, username, password} = req.body
    
    try{
        const existingUser = await UserModel.findOne({username});

        if(existingUser){
            res.status(400).json({message:"User already exists"});
        }
        
            const user = new UserModel({fullname, username, password});
            await user.save();
            res.status(201).json({message:"User created successfully!"});
        
    }
    catch(error){
        console.log(error);
    }
}

app.post("/register", register)

app.post("/logout", (req, res) => {
    req.session.destroy(err => {
        if(err){
            console.error(err);
            return res.status(500).json({message: "failed to Logout"})
        }
        res.redirect('/');
    })
})

app.listen(PORT, () => {
    console.log(`console is running on port: ${PORT}`);
});