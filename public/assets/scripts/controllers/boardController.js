myApp.controller('BoardController', ['$scope', 'DataFactory', '$http', function($scope, DataFactory, $http) {

    $scope.dataFactory = DataFactory;

    $scope.location = 'france';

    $scope.backup = 'http://s1.ibtimes.com/sites/www.ibtimes.com/files/2015/05/18/memorial-day-travel.jpg';

    //console.log($scope.location);

    $scope.dataFactory.retrieveUser().then(function() {
        $scope.userData = $scope.dataFactory.userInfo();
        //console.log($scope.userData);

        $scope.visionboard = $scope.userData.visionboard;
        //console.log($scope.vision);

        $scope.currentVision = $scope.visionboard.length - 1;
        //console.log($scope.currentVision);

        $scope.visions = $scope.visionboard[$scope.currentVision];
        //console.log($scope.visions.reading_list);

        $scope.current_book = $scope.visions.current_book;
        //console.log($scope.current_book);

        $scope.readingList = $scope.visions.reading_list;

        $scope.delights = $scope.visions.delight;

        $scope.thoughts = $scope.visions.thoughts;

        $scope.travels = $scope.visions.travel;
        //console.log($scope.travels[0].travel);

        $scope.current_objectives = $scope.visions.current_career;
        $scope.future_objectives = $scope.visions.future_career;

        $scope.location = $scope.travels[0].travel;

        //console.log($scope.location);

        getImage();
    });

    //API Call
    function getImage() {
        var randomImg = Math.floor((Math.random() * 50) + 1);
        //console.log(randomImg);

        $scope.dataFactory.getImg($scope.location).then(function() {
            $scope.imgInfo = $scope.dataFactory.gettyInfo();
            //console.log($scope.imgInfo);

            $scope.imgLink = $scope.imgInfo[randomImg].display_sizes[0].uri;
            //console.log($scope.imgLink);
        });
    }

}]);