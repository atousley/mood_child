myApp.factory('DataFactory', ['$http', '$window', function($http, $window) {

    var userData = undefined;
    //
    //var postFavorite = function(data) {
    //    $http.post('/data', data).then(function(response) {
    //    });
    //};
    //
    var getUser = function() {
        var promise = $http.get('/user').then(function(response) {
            if(response.data) {
                console.log(response.data);
                userData = response.data.username;
                console.log('User Data: ', userData);
            } else {
                $window.location.href = '/index.html';
            }
        });
        return promise;
    };

    var publicApi = {
        userInfo: function() {
            return userData;
        },
        retrieveUser: function() {
            return getUser();
        },
        //addFavorite: function(animal, breed, photo, name, age, sex, description, city, state) {
        //    var favorite = {};
        //    favorite.animal = animal;
        //    favorite.breed = breed;
        //    favorite.photo = photo;
        //    favorite.name = name;
        //    favorite.age = age;
        //    favorite.sex = sex;
        //    favorite.description = description;
        //    favorite.city = city;
        //    favorite.state = state;
        //
        //    postFavorite(favorite);
        //}

    };
    return publicApi;

}]);