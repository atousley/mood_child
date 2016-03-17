myApp.controller('ArchiveController', ['$scope', 'DataFactory', '$http', '$filter', function($scope, DataFactory, $filter, $http) {

    $scope.showBoard = false;

    $scope.dataFactory = DataFactory;

    $scope.dataFactory.retrieveUser().then(function() {
        $scope.userData = $scope.dataFactory.userInfo();
        //console.log($scope.userData);
        $scope.archives = $scope.userData.visionboard;
        //console.log($scope.archives);
    });

    $scope.showVision = function() {
        $scope.showBoard = true;

        $scope.selectedVision = $scope.archive;
        //console.log($scope.selectedVision);

        $scope.current_book = $scope.selectedVision.current_book;

        $scope.readingList = $scope.selectedVision.reading_list;

        $scope.delights = $scope.selectedVision.delight;

        $scope.thoughts = $scope.selectedVision.thoughts;

        $scope.travels = $scope.selectedVision.travel;

        $scope.current_objectives = $scope.selectedVision.current_career;
        $scope.future_objectives = $scope.selectedVision.future_career;

        $scope.location = $scope.travels[0].travel;

        getImage();
    };

    function getImage() {
        var randomImg = Math.floor((Math.random() * 50) + 1);

        $scope.dataFactory.getImg($scope.location).then(function() {
            $scope.imgInfo = $scope.dataFactory.gettyInfo();

            $scope.imgLink = $scope.imgInfo[randomImg].display_sizes[0].uri;
        });
    }

}]);