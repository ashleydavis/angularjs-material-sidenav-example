
angular.module( 'YourApp', [ 'ngMaterial', 'ngMdIcons' ] )
    .controller("YourController", function ($scope, $mdSidenav, $mdMedia) {
        $scope.yo = 'wddw!';

        //$scope.$mdMedia = $mdMedia;

        $scope.toggleLeftSideNav = function () {
            $mdSidenav('left').toggle();
        };

    });

