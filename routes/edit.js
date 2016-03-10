var express = require('express');
var router = express.Router();
//var mongoose = require('mongoose');
var User = require('../models/user');
var Vision = require('../models/visionBoard');


router.post('/:id', function(req, res) {
    console.log(req.body);
    var newVision = new Vision({
        "current_book": {
            "title": req.body.title,
            "author": req.body.author
        }

    });
    console.log(newVision);

    User.findById(req.params.id, function (err, result) {


        console.log('RESULT', result);

        result.visionboard.push(newVision);

        result.save(function(err, result){
            console.log('an error happened and nothing worked :)');
        });

    });


});
module.exports = router;