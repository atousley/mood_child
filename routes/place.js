var express = require('express');
var router = express.Router();
var getty = require('../node_modules/gettyimages-api');
var credentials = { apiKey: "9gydgjbpck44x4wcn4nf8yxd", apiSecret: "MdjSQNHUFnhGZN74bYAF4DeYAnZawvdh929fK3KmhDtHc",
    username: "atousley", password: "abt86427" };
var client = new getty (credentials);

router.get('/', function(req, res) {
    client.search().images().withPage(2).withPageSize(1).withPhrase('beach')
        .execute(function(err, response) {
            if (err) throw err
            //console.log(JSON.stringify(response.images[]));
            res.send(response.images);
        });
});

module.exports = router;


//query from pet finder:
//    function petFinder(animal) {
//        var key = '705cf21bd32eabe8c89315ec944817be';
//
//        var baseURL = 'http://api.petfinder.com/';
//        var query = 'pet.getRandom';
//        query += '?key=' + key;
//        query += '&animal=' + animal;
//        query += '&output=basic';
//        query += '&format=json';
//
//        var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
//        console.log(request);
//
//        $http.jsonp(request).then(
//            function(response) {
//                $scope.animal = response.data.petfinder.pet;
//            }
//        );
//    }

//var GooglePlaces = require('../node_modules/googleplaces');

//Google Places API KEY: AIzaSyDPCcKjcY1m7YwpSs2Cvu9WztNl2ePFa98

//var places = new GooglePlaces('AIzaSyDPCcKjcY1m7YwpSs2Cvu9WztNl2ePFa98');

//var places = new GooglePlaces(process.env.GOOGLE_API_KEY);
//
//places.search({keyword: 'Vermonster'}, function(err, response) {
//    if(err) { console.log(err); return; }
//    console.log("search: ", response.results);
//
//    places.details({reference: response.results[0].reference}, function(err, response) {
//        if(err) { console.log(err); return; }
//        console.log("search details: ", response.result.website);
//    });
//});
//
//places.autocomplete({input: 'Verm', types: "(cities)"}, function(err, response) {
//    if(err) { console.log(err); return; }
//    console.log("autocomplete: ", response.predictions);
//
//    var success = function(err, response) {
//        if(err) { console.log(err); return; }
//        console.log("did you mean: ", response.result.name);
//    };
//
//    for(var index in response.predictions) {
//        places.details({reference: response.predictions[index].reference}, success);
//    }
//});

//function locPhoto(){
//    var key = 'AIzaSyDPCcKjcY1m7YwpSs2Cvu9WztNl2ePFa98';
//    var location = 'chicago';
//    //encodeURIComponent(req.query.location);
//    //var radius = 16000;
//    //var sensor = false;
//    var types = "photo";
//    var keyword = "fast";
//
//    var https = require('https');
//    var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?" + "key=" + key + "&location=" + location + types + "&keyword=" + keyword;
//    console.log(url);
//    https.get(url, function(response) {
//        var body ='';
//        response.on('data', function(chunk) {
//            body += chunk;
//        });
//
//        response.on('end', function() {
//            var places = JSON.parse(body);
//            var locations = places.results;
//            var randLoc = locations[Math.floor(Math.random() * locations.length)];
//
//            res.json(randLoc);
//            console.log(places);
//        });
//    }).on('error', function(e) {
//        console.log("Got error: " + e.message);
//    });
//};
//locPhoto();

//var key = '9gydgjbpck44x4wcn4nf8yxd';
//var location = 'chicago';
//
////GET https://api.gettyimages.com/v3/search/images?phrase=<query term>
//
//var baseURL = 'https://api.gettyimages.com/v3/search/images';
//var query = '?phrase=' + location;
//query += '?key=' + key;
//
//var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
//
//get(request).then(function(response) {
//    var imageInfo = response;
//    console.log(imageInfo);
//});