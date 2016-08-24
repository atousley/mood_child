myApp.controller('BoardController', ['$scope', 'DataFactory', '$http', function($scope, DataFactory, $http) {

    //look into interaction that can happen with the books section

    $scope.dataFactory = DataFactory;

    $scope.location = 'france';

    $scope.backup = 'http://s1.ibtimes.com/sites/www.ibtimes.com/files/2015/05/18/memorial-day-travel.jpg';

    $scope.dataFactory.retrieveUser().then(function() {
        $scope.userData = $scope.dataFactory.userInfo();

        $scope.visionboard = $scope.userData.visionboard;

        $scope.currentVision = $scope.visionboard.length - 1;

        $scope.visions = $scope.visionboard[$scope.currentVision];

        $scope.current_book = $scope.visions.current_book;

        $scope.readingList = $scope.visions.reading_list;

        $scope.delights = $scope.visions.delight;

        $scope.thoughts = $scope.visions.thoughts;

        $scope.travels = $scope.visions.travel;

        $scope.current_objectives = $scope.visions.current_career;
        $scope.future_objectives = $scope.visions.future_career;

        $scope.location = $scope.travels[0].travel;


        postImage();
        postQuote();
    });

    //Getty API Call
    function postImage() {
        var randomImg = Math.floor((Math.random() * 50) + 1);

        $scope.dataFactory.getImg($scope.location).then(function() {
            $scope.imgInfo = $scope.dataFactory.gettyInfo();

            $scope.imgLink = $scope.imgInfo[randomImg].display_sizes[0].uri;
        });
    }

    //Forismatic API Call
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
    }
}]);