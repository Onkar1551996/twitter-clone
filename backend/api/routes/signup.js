const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'User is on signup page'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'User is going to signup by providing his details'
    });
});

module.exports = router;