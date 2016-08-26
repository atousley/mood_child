myApp.controller('EditController', ['$scope', 'DataFactory', '$http', '$location', '$q', function($scope, DataFactory, $http, $location, $q) {

    $scope.dataFactory = DataFactory;

    $scope.dataFactory.retrieveUser().then(function() {

        $scope.userData = $scope.dataFactory.userInfo();
        //console.log($scope.userData);

        if ($scope.userData.visionboard.length === 0) {
            alert("It's your first board!!! Go to town!!");
            //write in an iframe here, alerts are lame!
        }
        else {
            $scope.visionboard = $scope.userData.visionboard;

            $scope.currentVision = $scope.visionboard.length - 1;

            $scope.visions = $scope.visionboard[$scope.currentVision];

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

            $scope.thought1 = $scope.visions.thoughts[0].thought;
            $scope.thought2 = $scope.visions.thoughts[1].thought;
            $scope.thought3 = $scope.visions.thoughts[2].thought;
            $scope.thought4 = $scope.visions.thoughts[3].thought;

            $scope.travel1 = $scope.visions.travel[0].travel;
            $scope.travel2 = $scope.visions.travel[1].travel;
            $scope.travel3 = $scope.visions.travel[2].travel;
            $scope.travel4 = $scope.visions.travel[3].travel;
            $scope.travel5 = $scope.visions.travel[4].travel;

            $scope.current_career1 = $scope.visions.current_career[0].objective;
            $scope.current_career2 = $scope.visions.current_career[1].objective;
            $scope.current_career3 = $scope.visions.current_career[2].objective;

            $scope.future_career1 = $scope.visions.future_career[0].objective;
            $scope.future_career2 = $scope.visions.future_career[1].objective;
            $scope.future_career3 = $scope.visions.future_career[2].objective;
            $scope.future_career4 = $scope.visions.future_career[3].objective;
            $scope.future_career5 = $scope.visions.future_career[4].objective;
        }


    });


    $scope.saveVision = function() {
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
            delight8: $scope.delight8,
            thought1: $scope.thought1,
            thought2: $scope.thought2,
            thought3: $scope.thought3,
            thought4: $scope.thought4,
            travel1: $scope.travel1,
            travel2: $scope.travel2,
            travel3: $scope.travel3,
            travel4: $scope.travel4,
            travel5: $scope.travel5,
            current_career1: $scope.current_career1,
            current_career2: $scope.current_career2,
            current_career3: $scope.current_career3,
            future_career1: $scope.future_career1,
            future_career2: $scope.future_career2,
            future_career3: $scope.future_career3,
            future_career4: $scope.future_career4,
            future_career5: $scope.future_career5

        };

        $q.when($scope.dataFactory.sendVision(vision)).then(function() {

            $location.path('/board');
            //this still doesn't refresh the page

        });
    }

}]);