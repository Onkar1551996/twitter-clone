const express = require('express');
const router = express.Router();

router.get('/:username', (req, res, next) => {
    const username = req.params.username;
    if (username === 'OMPAWAR20') {
        res.status(200).json({
            message: 'You are on your profile page',
            user: username
        });
    } else {
        res.status(200).json({
            message: 'You need to login first'
        });
    }
});

module.exports = router;