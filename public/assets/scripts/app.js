var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/board', {
            templateUrl: '/views/templates/board.html',
            controller: 'BoardController'
        })
        .when('/edit', {
            templateUrl: '/views/templates/edit.html',
            controller: 'EditController'
        })
        .when('/archive', {
            templateUrl: '/views/templates/archive.html',
            controller: 'ArchiveController'
        })
        //.when('/newuser', {
        //    templateUrl: '/views/templates/newuser.html',
        //    controller: 'NewUserController'
        //})
        .otherwise({
            redirectTo: 'board'
        });
}]);

myApp.controller('UserController', ['$scope', 'DataFactory', '$http', '$window', function($scope, DataFactory, $window) {
    $scope.dataFactory = DataFactory;

    $scope.dataFactory.retrieveUser().then(function() {
        $scope.user = $scope.dataFactory.userInfo().username;
    });

    $scope.clientClickLogout = function() {
        //console.log('Nav Controller for Logout working');
        $scope.dataFactory.userLogoutReq().then(function() {
            //console.log('back from factory');
        })
    }

}]);