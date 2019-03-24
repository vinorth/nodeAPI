const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: String,
    firstName: String,
    lastName: String,
    username: String,
    posts: [String],
    archived: Boolean
}, { _id: false});

module.exports = mongoose.model('User', UserSchema);
