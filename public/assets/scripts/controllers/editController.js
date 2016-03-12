myApp.controller('EditController', ['$scope', 'DataFactory', '$http', function($scope, DataFactory, $http) {

    //console.log('edit controller hooked up');

    $scope.dataFactory = DataFactory;

    $scope.dataFactory.retrieveUser().then(function() {
        $scope.userData = $scope.dataFactory.userInfo();
        //console.log($scope.userData);

        $scope.visionboard = $scope.userData.visionboard;
        //console.log($scope.vision);

        $scope.currentVision = $scope.visionboard.length - 1;
        //console.log($scope.currentVision);

        $scope.visions = $scope.visionboard[$scope.currentVision];
        //console.log($scope.visions);

        $scope.title = $scope.visions.current_book.title;
        $scope.author = $scope.visions.current_book.author;
        $scope.title1 = $scope.visions.reading_list[0].title;
        $scope.author1 = $scope.visions.reading_list[0].author;
        $scope.title2 = $scope.visions.reading_list[1].title;
        $scope.author2 = $scope.visions.reading_list[1].author;
        $scope.title3 = $scope.visions.reading_list[2].title;
        $scope.author3 = $scope.visions.reading_list[2].author;
        $scope.title4 = $scope.visions.reading_list[3].title;
        $scope.author4 = $scope.visions.reading_list[3].author;
        $scope.title5 = $scope.visions.reading_list[4].title;
        $scope.author5 = $scope.visions.reading_list[4].author;

        $scope.delight1 = $scope.visions.delight[0].delight;
        $scope.delight2 = $scope.visions.delight[1].delight;
        $scope.delight3 = $scope.visions.delight[2].delight;
        $scope.delight4 = $scope.visions.delight[3].delight;
        $scope.delight5 = $scope.visions.delight[4].delight;
        $scope.delight6 = $scope.visions.delight[5].delight;
        $scope.delight7 = $scope.visions.delight[6].delight;
        $scope.delight8 = $scope.visions.delight[7].delight;


    });


    $scope.saveVision = function() {
        //console.log('save function firing', id);

        $scope.dataFactory = DataFactory;

        var vision = {
            id: id,
            title: $scope.title,
            author: $scope.author,
            title1: $scope.title1,
            author1: $scope.author1,
            title2: $scope.title2,
            author2: $scope.author2,
            title3: $scope.title3,
            author3: $scope.author3,
            title4: $scope.title4,
            author4: $scope.author4,
            title5: $scope.title5,
            author5: $scope.author5,
            delight1: $scope.delight1,
            delight2: $scope.delight2,
            delight3: $scope.delight3,
            delight4: $scope.delight4,
            delight5: $scope.delight5,
            delight6: $scope.delight6,
            delight7: $scope.delight7,
            delight8: $scope.delight8
        };

        $scope.dataFactory.sendVision(vision);
        //.then(function() {
        //    $scope.user = $scope.dataFactory.userInfo();
        //    console.log($scope.user);
    }

}]);