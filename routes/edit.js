var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.model(
    'Vision',
    new Schema({
            "title": String,
            "author": String
        },
        {
            collection: 'vision'
        }
    ));

var vision = mongoose.model('Vision');

router.post('/', function(req, res) {
    var newVision = new vision ({
        "title": req.body.title,
        "author": req.body.author
    });

    newVision.save(function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        vision.find({}, function(err, data) {
            if(err) {
                console.log('ERR: ', err);
            }

            res.send(data);
        });
    });

});


module.exports = router;