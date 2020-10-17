const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'User is on login page'
    });
});

router.post('/', (req, res, next) => {
    const user = {
        userId: req.body.userId,
        password: req.body.password
    }
    res.status(201).json({
        message: 'User is going to login using his credentials',
        loginStatus: user
    });
});

module.exports = router;