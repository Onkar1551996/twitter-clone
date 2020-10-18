const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    phone: String,
    email: String,
    dateofbirth: Date,
    username: String,
    password: String,
    bio: String,
    language: String,
    country: String,
    gender: String,
    age: Number
});

module.exports = mongoose.model('User', userSchema);