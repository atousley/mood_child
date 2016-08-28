myApp.controller('NewUserController', ['$scope', '$window', '$location', function($scope, $window, $location) {

    $scope.reroute = function() {

        console.log('i work');

        $window.location.href = '/views/user.html';

    };

}]);