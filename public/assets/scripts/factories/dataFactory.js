myApp.factory('DataFactory', ['$http', '$window', function($http, $window) {

    var userData = undefined;
    var gettyImg = undefined;
    //var quote = '~im an inspirational quote~';


    //Image and Quote
    var getImg = function(location) {
        var promise = $http.get('/place/' + location).then(function(response) {
            gettyImg = response.data;
        });
        return promise;
    };

    var getQuote = function() {
        var promise = $http.get('/quote').then(function(response) {
            quote = response.data;
        });
        return promise;
        //Need to add error handling if API goes down. Local directory of random quotes?
    };


    //Save New Vision Board Data
    var postVision = function(data) {
        $http.post('/edit/' + id, data).then(function(response) {
        });
        //This promise is local, return it if you don't want to use $q.when
    };

    //Get User and Vision Board Data

    //make sure this doesn't run until the data is saved - it's also running too many times.
    var getUser = function() {
        var promise = $http.get('/user').then(function(response) {
            console.log('response from user data req in DF', response.data);

            if(response.data) {
                userData = response.data;
                id = response.data._id;
            } else {
                $window.location.href = '/index.html';
            }
        });
        return promise;
    };

    //Logout User
    var logoutUser = function() {
        console.log('hits top of data fac');
     var promise = $http.get('/logout').then(function(response){
         $window.location.href = '/index.html';
      });
        return promise;
    };


    //Public Function Connections
    var publicApi = {
        userInfo: function() {
            return userData;
        },

        gettyInfo: function() {
            return gettyImg;
        },

        retrieveUser: function() {
            return getUser();
        },
        sendVision: function(vision) {

            postVision(vision);
        },

        getImg: function(location) {
            return getImg(location);
        },

        retrieveQuote: function() {
            return getQuote();
        },
        randomQuote: function() {
            return quote;
        },

        userLogoutReq: function() {
            return logoutUser();
        }

    };
    return publicApi;

}]);