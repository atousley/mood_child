myApp.controller('NewUserController', ['$scope', '$location', function($scope, $location) {

//this might not end up being needed it the future if new users don't need additional action


    $scope.reroute = function() {

        console.log('i work ok?');

        $location.path('/board');

    }


}]);