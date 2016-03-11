myApp.controller('EditController', ['$scope', 'DataFactory', '$http', function($scope, DataFactory, $http) {

    //console.log('edit controller hooked up');

    $scope.dataFactory = DataFactory;


    $scope.saveVision = function() {
        //console.log('save function firing', id);

        $scope.dataFactory = DataFactory;

        var vision = {
            id: id,
            title: $scope.title,
            author: $scope.author,
            title1: $scope.title1,
            author1: $scope.author1,
            title2: $scope.title2,
            author2: $scope.author2,
            title3: $scope.title3,
            author3: $scope.author3,
            title4: $scope.title4,
            author4: $scope.author4,
            title5: $scope.title5,
            author5: $scope.author5
        };

        $scope.dataFactory.sendVision(vision);
        //.then(function() {
        //    $scope.user = $scope.dataFactory.userInfo();
        //    console.log($scope.user);
    }

}]);