const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: String,
    //passport automatically puts username and password (hash and salt) into the Schema
    image: String, //profile pic
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'

        }
    ]
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
/*
User:
- email -string
- password -string
- username - string
-profilePic - string
- posts - array of objects Ref post
- reviews - array of objects Ref Reviews
*/
