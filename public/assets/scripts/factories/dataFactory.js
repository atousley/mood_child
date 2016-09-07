myApp.factory('DataFactory', ['$http', '$window', function($http, $window) {

    var userData = undefined;
    var gettyImg = undefined;
    //var quote = '~im an inspirational quote~';

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
    };

    var postVision = function(data) {
        $http.post('/edit/' + id, data).then(function(response) {
        });
        //This promise is local, return it if you don't want to use $q.when
    };

    var getUser = function() {
        var promise = $http.get('/user').then(function(response) {
            if(response.data) {
                userData = response.data;
                id = response.data._id;
            } else {
                $window.location.href = '/index.html';
            }
        });
        return promise;
    };

    var logoutUser = function() {
        console.log('hits top of data fac');
      $http.get('/logout').then(function(){
          console.log('back from server in top of data fac');
      });

    };

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