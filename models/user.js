const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  image: {
    secure_url: {type: String, default: '/images/default-profile.jpg'},
    public_id: String
  }
});

UserSchema.plugin(passportLocalMongoose, uniqueValidator);

module.exports = mongoose.model('User', UserSchema)
