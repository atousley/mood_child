myApp.controller('BoardController', ['$scope', 'DataFactory', '$http', function($scope, DataFactory, $http) {

    $scope.dataFactory = DataFactory;

    $scope.dataFactory.retrieveUser().then(function() {
        $scope.userData = $scope.dataFactory.userInfo();
        //console.log($scope.userData);

        $scope.vision = $scope.userData.visionboard;
        //console.log($scope.vision);

        $scope.currentVision = $scope.vision.length - 1;
        //console.log($scope.currentVision);

        $scope.visions = $scope.vision[$scope.currentVision];
        //console.log($scope.visions);

    });

}]);