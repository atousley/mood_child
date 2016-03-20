var express = require('express');
var router = express.Router();
var forismatic = require('forismatic-node')();

router.get('/' , function(req, res) {
    forismatic.getQuote(function (error, quote) {
        if (!error) {
            res.send(quote);
        } else {
            console.error(error);
        }
    });
});

module.exports = router;