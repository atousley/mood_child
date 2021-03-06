myApp.controller('BoardController', ['$scope', 'DataFactory', '$http', '$location', function($scope, DataFactory, $http, $location) {

    $scope.dataFactory = DataFactory;

    $scope.location = 'france';

    $scope.backup = '../images/vwbus.jpg';
    //add photo credit on front end within if statement or link: http://www.richardgottardo.com/willy-nilly/wil1/

    $scope.dataFactory.retrieveUser().then(function() {
        $scope.userData = $scope.dataFactory.userInfo();
        console.log("user data in board controller:", $scope.userData);

        if ($scope.userData.visionboard.length === 0) {
            $location.path('/edit');
            $scope.imgLink = $scope.backup;
        }
        else {
            $scope.visionboard = $scope.userData.visionboard;

            $scope.currentVision = $scope.visionboard.length - 1;

            $scope.visions = $scope.visionboard[$scope.currentVision];

            $scope.current_book = $scope.visions.current_book;

            $scope.readingList = $scope.visions.reading_list;

            for (var i = 0; i < $scope.readingList.length; i++)  {

                if ($scope.readingList[i].title && $scope.readingList[i].author != undefined)
                {
                    $scope.readingList[i].title += ", ";
                }
            }

            $scope.delights = $scope.visions.delight;

            $scope.thoughts = $scope.visions.thoughts;

            $scope.travels = $scope.visions.travel;

            $scope.current_objectives = $scope.visions.current_career;
            $scope.future_objectives = $scope.visions.future_career;

            $scope.location = $scope.travels[0].travel;

            postImage();
            postQuote();
        }

    });

    //Getty API Call
    function postImage() {

        if ($scope.location == undefined) {
            $scope.imgLink = $scope.backup;
            $scope.photo_credit = "Photo via: http://www.richardgottardo.com/";
        }
        else {
            var randomImg = Math.floor((Math.random() * 50) + 1);
            $scope.dataFactory.getImg($scope.location).then(function () {
                $scope.imgInfo = $scope.dataFactory.gettyInfo();

                $scope.imgLink = $scope.imgInfo[randomImg].display_sizes[0].uri;
            });
        }
    }

    //Forismatic API Call for a Random Quote
    function postQuote() {
        $scope.dataFactory.retrieveQuote().then(function() {
            $scope.quoteInfo = $scope.dataFactory.randomQuote();
            //console.log('quoteInfo', $scope.quoteInfo);
            $scope.quote = $scope.quoteInfo.quoteText;
            if ($scope.quoteInfo.quoteAuthor == '') {
                $scope.author = 'Unknown';
            } else {
                $scope.author = $scope.quoteInfo.quoteAuthor;
            }
        });

        //need error handling here for if Forismatic goes down or errors
    }
}]);