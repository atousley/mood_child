myApp.factory('DataFactory', ['$http', '$window', function($http, $window) {

    var userData = undefined;
    var gettyImg = undefined;

    var getImg = function(location) {
        console.log('second get image call is functioning');
        console.log(location);
        var promise = $http.get('/place/' + location).then(function(response) {
            gettyImg = response.data;
            console.log(gettyImg);
        });
        return promise;
    };

    var postVision = function(data) {
        //console.log('sending to post', data);
        $http.post('/edit/' + id, data).then(function(response) {
            //console.log('posted this vision', response);
        });
    };

    var getUser = function() {
        var promise = $http.get('/user').then(function(response) {
            if(response.data) {
                //console.log(response.data);
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
            //console.log('vision in factory', vision);

            postVision(vision);
        },

        getImg: function(location) {
            return getImg(location);
        }

    };
    return publicApi;

}]);