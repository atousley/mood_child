myApp.controller('EditController', ['$scope', '$http', function($scope, $http) {

    console.log('edit controller hooked up');

    $scope.saveVision = function() {
        console.log('save function firing')

        var current_book = {
            title: $scope.title,
            author: $scope.author
        };

        $http.post('/current_book', current_book).then(function(response) {
            console.log('posted this book', response);
        });
    }

}]);