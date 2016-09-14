myApp.controller('ArchiveController', ['$scope', 'DataFactory', '$http', '$filter', function($scope, DataFactory, $filter, $http) {

    $scope.showBoard = false;

    $scope.dataFactory = DataFactory;

    $scope.backup = '../images/vwbus.jpg';

    //Gets all instances of users saved vision boards
    $scope.dataFactory.retrieveUser().then(function() {
        $scope.userData = $scope.dataFactory.userInfo();
        $scope.archives = $scope.userData.visionboard;
    });

    //Show the vision board of the selected instance
    $scope.showVision = function() {
        $scope.showBoard = true;

        $scope.selectedVision = $scope.archive;

        $scope.current_book = $scope.selectedVision.current_book;

        $scope.readingList = $scope.selectedVision.reading_list;

        for (var i = 0; i < $scope.readingList.length; i++)  {

            if ($scope.readingList[i].title && $scope.readingList[i].author != undefined)
            {
                //console.log($scope.readingList[i]);
                $scope.readingList[i].title += ", ";
            }
        }

        $scope.delights = $scope.selectedVision.delight;

        $scope.thoughts = $scope.selectedVision.thoughts;

        $scope.travels = $scope.selectedVision.travel;

        $scope.current_objectives = $scope.selectedVision.current_career;
        $scope.future_objectives = $scope.selectedVision.future_career;

        $scope.location = $scope.travels[0].travel;
        //console.log($scope.location);

        getImage();
    };

    //Random image function
    function getImage() {
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

}]);