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
        //.then(function() {
    //   console.log('going to get image');
    //});

}]);
