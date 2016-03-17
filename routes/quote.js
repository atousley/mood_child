var express = require('express');
var router = express.Router();
var key = require('./quoteKey');

router.get('/' , function(req, res) {
    console.log('quote route firing');
    //client.search().images().creative().withResponseField('comp').withGraphicalStyle('photography')
    //    .withPageSize(50).withPhrase('travel' + ' ' + location)
    //    .execute(function(err, response) {
    //        if (err) {
    //            console.log(err);
    //        }
    //        res.send(response.images);
    //    });
});

module.exports = router;


//function petFinder(animal) {
//    var key = '705cf21bd32eabe8c89315ec944817be';
//
//    var baseURL = 'http://api.petfinder.com/';
//    var query = 'pet.getRandom';
//    query += '?key=' + key;
//    query += '&animal=' + animal;
//    query += '&output=basic';
//    query += '&format=json';
//
//    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
//    console.log(request);
//
//    $http.jsonp(request).then(
//        function(response) {
//            $scope.animal = response.data.petfinder.pet;
//        }
//    );
//}
//
//petFinder();