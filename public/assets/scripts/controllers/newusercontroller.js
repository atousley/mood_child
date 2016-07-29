myApp.controller('NewUserController', ['$scope', '$window', function($scope, $window) {

//this might not end up being needed it the future if new users don't need additional action


    $scope.reroute = function() {

        console.log('i work ok?');

        $window.location.href = '/board.html';

        //$location.path('board');

    }


}]);