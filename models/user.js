const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    // _id: false,
    id: String,
    firstName: String,
    lastName: String,
    username: String,
    posts: [String],
    archived: Boolean
});

module.exports = mongoose.model('User', UserSchema);
