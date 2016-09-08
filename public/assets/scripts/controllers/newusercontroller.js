myApp.controller('NewUserController', ['$scope', '$window', '$location', function($scope, $window, $location) {

    //Button function to take newly registered users to the edit page from the welcome page
    $scope.reroute = function() {
        $window.location.href = '/views/user.html';

    };

}]);