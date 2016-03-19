myApp.factory('DataFactory', ['$http', '$window', function($http, $window) {

    var userData = undefined;
    var gettyImg = undefined;
    var quote = '~im an inspirational quote~';

    var getImg = function(location) {
        var promise = $http.get('/place/' + location).then(function(response) {
            gettyImg = response.data;
        });
        return promise;
    };

    var getQuote = function() {
      console.log('data factory get quote firing');
        var promise = $http.get('/quote').then(function(response) {
            quote = response.data;
            //console.log(quote);
        });
        return promise;
    };

    var postVision = function(data) {
        $http.post('/edit/' + id, data).then(function(response) {
        });
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
        }

    };
    return publicApi;

}]);