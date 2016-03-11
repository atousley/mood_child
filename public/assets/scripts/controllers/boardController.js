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

        $scope.readingList = $scope.visions.reading_list;

        $scope.delights = $scope.visions.delight;

    });

}]);