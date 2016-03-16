myApp.controller('ArchiveController', ['$scope', 'DataFactory', '$http', '$filter', function($scope, DataFactory, $filter, $http) {

    $scope.dataFactory = DataFactory;

    $scope.dataFactory.retrieveUser().then(function() {
        $scope.userData = $scope.dataFactory.userInfo();
        console.log($scope.userData);
        $scope.archives = $scope.userData.visionboard;
        console.log($scope.archives);

    });

}]);