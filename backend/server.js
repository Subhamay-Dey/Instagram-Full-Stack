const express = require("express");
const app = express();
const body_parser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const UserModel = require("./index/User.model");

const PORT = 8080 ||  process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

const express_session = require("express-session");

app.use(session({
    resave: false,
    saveUninitiated: false,
    secret: "secret",
}));



app.post("/register", function(req, res){
    var userdata = new UserModel({
        username: req.body.username,
        password: req.body.password,
    })

    //or

    // var {username, password} = req.body
    // const userdata = new UserModel({username, password})
})

app.listen(PORT, () => {
    console.log(`console is running on port: ${PORT}`);
});

