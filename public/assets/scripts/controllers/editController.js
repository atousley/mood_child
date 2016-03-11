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
            author5: $scope.author5,
            delight1: $scope.delight1,
            delight2: $scope.delight2,
            delight3: $scope.delight3,
            delight4: $scope.delight4,
            delight5: $scope.delight5,
            delight6: $scope.delight6,
            delight7: $scope.delight7,
            delight8: $scope.delight8
        };

        $scope.dataFactory.sendVision(vision);
        //.then(function() {
        //    $scope.user = $scope.dataFactory.userInfo();
        //    console.log($scope.user);
    }

}]);