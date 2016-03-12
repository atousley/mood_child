myApp.factory('DataFactory', ['$http', '$window', function($http, $window) {

    var userData = undefined;
    var visionBoard;
    var currentVision;
    var visions;
    var readingList;
    var delights;

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
                //userName = response.data.username;
                id = response.data._id;
                //vision = response.data.visionboard;
                //console.log('User Data: ', userData, id);
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
        }

    };
    return publicApi;

}]);