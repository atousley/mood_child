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
        .otherwise({
            redirectTo: 'board'
        });
}]);

myApp.controller('UserController', ['$scope', 'DataFactory', '$http', '$window', function($scope, DataFactory, $http, $window) {
    $scope.userName;

    $scope.dataFactory = DataFactory;

    $scope.dataFactory.retrieveUser().then(function() {
        $scope.user = $scope.dataFactory.userInfo().username;
    });

}]);