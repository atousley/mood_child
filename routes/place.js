var express = require('express');
var router = express.Router();
var GooglePlaces = require('googleplaces');

//Google Places API KEY: AIzaSyDPCcKjcY1m7YwpSs2Cvu9WztNl2ePFa98
var places = new GooglePlaces('AIzaSyDPCcKjcY1m7YwpSs2Cvu9WztNl2ePFa98');

router.get('/', function(req, res) {

});


module.exports = router;