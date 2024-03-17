const express = require("express");
const app = express();
const body_parser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const UserModel = require("./index");
const bcrypt = require("bcrypt");
const postsModel = require("./posts")

const PORT = 8080 ||  process.env.PORT;

mongoose.connect("mongodb://127.0.0.1:27017/Instadatabase");

app.use(bodyParser.json());
app.use(cors());

const express_session = require("express-session");

app.use(express_session({
    resave: false,
    saveUninitiated: false,
    secret: "secret",
}));

app.post("/login", async function(req, res){
    var {fullname, username, password} = req.body;

    try{
        const fullname = await UserModel.findOne({fullname});

        if(!fullname){
            res.status(404).json({message: "Fullname not found"});
        }

        const user = await UserModel.findOne({username});

        if(!user){
            res.status(404).json({message: "Username not found"});
        }

        const isPasswordValid = await bcrypt.compare(password, UserModel.password)

        if(!isPasswordValid){
            res.status(400).json({message: "password is incorrect"})
        }

        res.status(200).json({message: "Login successful"})
    }
    catch(error){
        console.log(error);
        res.status(501).json({message: "Server error"});
    }
})

app.post("/register", function(req, res){
    var userdata = new UserModel({
        fullname: req.body.fullname,
        username: req.body.username,
        password: req.body.password,
    })

    //or

    // var {username, password} = req.body
    // const userdata = new UserModel({username, password})
})

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