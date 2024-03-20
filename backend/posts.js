const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    _id: {
        type: String,
        default: () => Math.random().toString(36).substr(2,9)
    },
    topic: String,
    imgUrl: String,
    videoUrl: String,
    datecreated: {
        type: Date,
        default: Date.now()
    }
});

const postsModel = mongoose.model("posts", postSchema);

module.exports = postsModel;