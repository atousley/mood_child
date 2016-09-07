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
    console.log(req.body);
    Users.create(req.body, function(err, post) {
        if(err) {
            next(err);
        } else {
            res.redirect('/views/newuser.html');
        }
    });
});


// Handles Ajax request for user information if user is authenticated
router.get('/', function(req, res) {
    // check if logged in
    if(req.isAuthenticated()) {
        // send back user object from database
        res.send(req.user);
    } else {
        // failure best handled on the server. do redirect here.
        res.send(false);
    }
});

//Sample logout
//app.get('/logout', function(req, res){
//    req.logout();
//    res.redirect('/');
//});

router.get('/logout', function(req, res){
    console.log('hits server route');
    req.logout();
    res.redirect('/index.html');
});


module.exports = router;