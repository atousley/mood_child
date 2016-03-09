var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/board', {
            templateUrl: '/views/templates/board.html',
            //controller: ''
        })
        .when('/edit', {
            templateUrl: '/views/templates/edit.html',
            //controller: 'EditController'
        })
        .when('/archive', {
            templateUrl: '/views/templates/archive.html',
            //controller: ''
        })
        .otherwise({
            redirectTo: 'board'
        });
}]);

myApp.controller('UserController', ['$scope', '$http', '$window', function($scope, $http, $window) {
    $scope.userName;

    // This happens after page load, which means it has authenticated if it was ever going to
    // NOT SECURE
    $http.get('/user').then(function(response) {
        if(response.data) {
            $scope.userName = response.data.username;
            console.log('User Data: ', $scope.userName);
        } else {
            $window.location.href = '/index.html';
        }
    });
}]);