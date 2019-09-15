const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: String,
    price: String,
    Description: String,
    images: [String],
    location: String,
    lat: Number,
    long: Number,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews: {
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }
});

module.exports = mongoose.model('Post', PostSchema);
/*
 Post
- Title - string
- Price - string
- Description -string
- Specs (HP, TQ, AWD?, Sedan/Coupe/Truck/SUV)
- Images - array of strings
- Location (Lat- String, Long-String) - numbers
- Author - object id(ref User)
- Reviews - array of objects
*/