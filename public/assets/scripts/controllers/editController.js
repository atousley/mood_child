myApp.controller('EditController', ['$scope', 'DataFactory', '$http', function($scope, DataFactory, $http) {

    //console.log('edit controller hooked up');

    $scope.dataFactory = DataFactory;


    $scope.saveVision = function() {
        console.log('save function firing')

        var current_book = {
            title: $scope.title,
            author: $scope.author
        };

        $http.post('/edit', current_book).then(function(response) {
            console.log('posted this book', response);
        });
    }

}]);