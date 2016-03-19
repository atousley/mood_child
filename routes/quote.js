var express = require('express');
var router = express.Router();
var forismatic = require('forismatic-node')();

router.get('/' , function(req, res) {
    console.log('quote route firing');
    forismatic.getQuote(function (error, quote) {
        if (!error) {
            //console.log(quote);
            res.send(quote);
        } else {
            console.error(error);
        }
    });
});

module.exports = router;