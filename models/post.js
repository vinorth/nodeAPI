const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    id: String,
    userId: String,
    title: String,
    description: String,
    iconUrl: String,
    username: String,
    rating: Number,
    distance: Number,
    archived: Boolean
}, { _id: false });

module.exports = mongoose.model('Post', PostSchema);
