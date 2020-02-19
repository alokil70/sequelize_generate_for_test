const express = require('express');
const router = express.Router();
const db = require('../models');

router.post('/register', (req, res) => {
    db.User.create({
        email: req.body.email,
        password: req.body.password
    }).then(newUser => res.send(newUser))
});

router.get('/users', (req, res) => {
    db.User.findAll({
        include: [db.Profile, db.Post]
    }).then(allUsers => res.send(allUsers))
});

module.exports = router;
