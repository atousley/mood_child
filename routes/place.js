var express = require('express');
var router = express.Router();
var getty = require('../node_modules/gettyimages-api');
var credentials = require('./creds');
var client = new getty (credentials);

//https://api.gettyimages.com:443/v3/search/images/creative?exclude_nudity=true&fields=comp&file_types=eps%2Cgif%2Cjpg%2Cpng&graphical_styles=photography&license_models=rightsmanaged&number_of_people=none&phrase='travel%20chicago'&sort_order=best_match


router.get('/:location' , function(req, res) {
    //console.log(req.params);
    var location = req.params.location;
    client.search().images().creative().withResponseField('comp').withGraphicalStyle('photography')
        .withPageSize(3).withPhrase('travel' + ' ' + location)
        .execute(function(err, response) {
            if (err) throw err
            //console.log(JSON.stringify(response.images[]));
            res.send(response.images);
        });
});

module.exports = router;