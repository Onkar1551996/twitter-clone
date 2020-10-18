const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/signup');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'User is on signup page'
    });
});

router.post('/', (req, res, next) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        dateofbirth: req.body.dateofbirth,
        username: req.body.username,
        password: req.body.password,
        bio: req.body.bio,
        language: req.body.language,
        country: req.body.country,
        gender: req.body.gender,
        age: req.body.age
    });
    user.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: 'User is going to signup by providing his details',
            createdUser: user
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err}); 
    });
});

module.exports = router;