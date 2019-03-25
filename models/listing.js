const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
    // _id: false,
    id: String,
    userId: String,
    title: String,
    description: String,
    iconUrl: String,
    username: String,
    rating: Number,
    distance: Number,
    archived: Boolean
});

module.exports = mongoose.model('Listing', ListingSchema);
