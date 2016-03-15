myApp.factory('DataFactory', ['$http', '$window', function($http, $window) {

    var userData = undefined;

    var getImg = function() {
        console.log('second get image call is functioning');
        $http.get('/place').then(function(response) {
            gettyImg = response.data;
            console.log(gettyImg);
        });
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
        retrieveUser: function() {
            return getUser();
        },
        sendVision: function(vision) {
            //console.log('vision in factory', vision);

            postVision(vision);
        },

        getImg: function() {
            return getImg();
        }

    };
    return publicApi;

}]);