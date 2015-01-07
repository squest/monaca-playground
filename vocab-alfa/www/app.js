/**
 * Created by macquest on 1/7/15.
 */

var app = ons.bootstrap('vocabApp', ['onsen']);

app.controller('AppCtrl', ['$scope', function ($scope) {
    $scope.page = {
        title : "Welcome to our page" ,
        defs : "Crack stuffs"
    };
}]);

app.controller('MainCtrl', ['$scope', function ($scope) {
    ons.ready(function () {
        // Init code here
    });
}])
