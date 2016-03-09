var express = require('express');
var router = express.Router();
var passport = require('passport');
var Users = require('../models/user');


// Handles login form POST from index.html
router.post('/login',
    passport.authenticate('local', {
        successRedirect: '/views/user.html',
        failureRedirect: '/views/failure.html'
    })
);

router.post('/register', function(req, res, next) {
    Users.create(req.body, function(err, post) {
        if(err) {
            next(err);
        } else {
            res.redirect('/');
        }
    });
});

module.exports = router;