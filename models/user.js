const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: String,
    firstName: String,
    lastName: String,
    username: String,
    posts: [String]
});

module.exports = mongoose.model('User', UserSchema);
