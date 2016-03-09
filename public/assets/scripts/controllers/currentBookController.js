myApp.controller('CurrentBook', ['$scope', '$http', function($scope, $http) {

    console.log('currentBook controller hooked up');

    $scope.saveVision = function() {
        //console.log('save function firing')
        console.log('post to this user', $scope._id);

        var current_book = {
            title: $scope.title,
            author: $scope.author
        };

        $http.post('/current_book', current_book).then(function(response) {
            console.log('posted this book', response);
        });
    }

}]);