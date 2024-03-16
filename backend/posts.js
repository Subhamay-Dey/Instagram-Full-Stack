const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    id: String,
});

const postsModel = mongoose.model("posts", postSchema);

module.exports = postsModel;