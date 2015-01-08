var app = angular.module('vocabApp', ['onsen']);

app.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
	ons.ready(function ( ) {
        $scope.page = {
            title : "Welcome page",
            desc : "Crafty stuffs"
        }
	});
}]);