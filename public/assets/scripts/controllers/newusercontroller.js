myApp.controller('NewUserController', ['$scope', '$window', '$location', function($scope, $window, $location) {

    $scope.reroute = function() {

        console.log('i work');

        //this redirect works but needs handling for when users don't yet have data
        $window.location.href = '/views/user.html';

    };

}]);