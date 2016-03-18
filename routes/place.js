var express = require('express');
var router = express.Router();
var getty = require('../node_modules/gettyimages-api');
var credentials = require('./creds');
var client = new getty (credentials);

//include method to pass in each location from top-5 when clicked on

router.get('/:location' , function(req, res) {
    var location = req.params.location;
    //console.log(location);
    client.search().images().creative().withResponseField('comp').withGraphicalStyle('photography')
        .withPageSize(50).withPhrase('travel' + ' ' + location)
        .execute(function(err, response) {
            if (err) {
                console.log(err);
            }
            res.send(response.images);
        });
});

module.exports = router;