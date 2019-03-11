const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    id: String,
    userId: String,
    iconUrl: String,
    title: String,
    username: String,
    rating: Number,
    distance: Number,
    description: String
});

module.exports = mongoose.model('Post', PostSchema);
