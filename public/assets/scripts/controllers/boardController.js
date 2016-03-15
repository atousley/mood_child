myApp.controller('BoardController', ['$scope', 'DataFactory', '$http', function($scope, DataFactory, $http) {

    $scope.dataFactory = DataFactory;

    $scope.dataFactory.retrieveUser().then(function() {
        $scope.userData = $scope.dataFactory.userInfo();
        //console.log($scope.userData);

        $scope.visionboard = $scope.userData.visionboard;
        //console.log($scope.vision);

        $scope.currentVision = $scope.visionboard.length - 1;
        //console.log($scope.currentVision);

        $scope.visions = $scope.visionboard[$scope.currentVision];
        //console.log($scope.visions.reading_list);

        $scope.current_book = $scope.visions.current_book;
        //console.log($scope.current_book);

        $scope.readingList = $scope.visions.reading_list;

        $scope.delights = $scope.visions.delight;

        $scope.thoughts = $scope.visions.thoughts;

        $scope.travels = $scope.visions.travel;

        $scope.current_objectives = $scope.visions.current_career;
        $scope.future_objectives = $scope.visions.future_career;

    });

    //API Call
    $scope.dataFactory.getImg();

    //function getPhoto() {
    //    var key = '9gydgjbpck44x4wcn4nf8yxd';
    //    var location = 'chicago';
    //
    //    //GET https://api.gettyimages.com/v3/search/images?phrase=<query term>
    //
    //    var baseURL = 'https://api.gettyimages.com/v3/search/images';
    //    var query = '?phrase=' + location;
    //    query += '?key=' + key;
    //
    //    var request = baseURL + encodeURI(query);
    //
    //    $http.jsonp(request).then(function(response) {
    //        $scope.imageInfo = response;
    //        console.log(imageInfo);
    //    });
    //}
    //getPhoto();
}]);

//function petFinder(animal) {
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
