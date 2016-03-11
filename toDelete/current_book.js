var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.model(
    'Current_Book',
    new Schema({
            "title": String,
            "author": String
        },
        {
            collection: 'vision'
        }
    ));

var Current_Book = mongoose.model('Current_Book');

router.post('/', function(req, res) {
    var newCurrentBook = new Current_Book ({
        "title": req.body.title,
        "author": req.body.author
    });

    newCurrentBook.save(function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        Current_Book.find({}, function(err, data) {
            if(err) {
                console.log('ERR: ', err);
            }

            res.send(data);
        });
    });

});


module.exports = router;