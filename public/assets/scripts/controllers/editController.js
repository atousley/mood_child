myApp.controller('EditController', ['$scope', 'DataFactory', '$http', function($scope, DataFactory, $http) {

    //console.log('edit controller hooked up');

    $scope.dataFactory = DataFactory;


    $scope.saveVision = function() {
        console.log('save function firing', id);

        $scope.dataFactory = DataFactory;

        var vision = {
            id: id,
            title: $scope.title,
            author: $scope.author
        };

        $scope.dataFactory.sendVision(vision);
        //.then(function() {
        //    $scope.user = $scope.dataFactory.userInfo();
        //    console.log($scope.user);

    }

}]);