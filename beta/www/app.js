var app = angular.module('vocabApp', ['onsen']);

var drillSetOne = [
    {word : "well", def : "whatlalas"},
    {word : "react" , def : "whatsppa"},
    {word : "rbad" , def : "pelldone"} ,
    {word : "yaiks", def : "plado"} ,
    {word : "bringas", def : "wellbet"},
    {word : "himasn" , def : "braktors"} ,
    {word : "jimbaran", def : "John paul"},
    {word : "praktors", def : "what evear"}
];

app.config(function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain.  Notice the difference between * and **.
        'http://www.lispyway.com**'
    ]);
});

app.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.title = "Zenius Vocab drills";
}]);

app.controller('TabCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.choosePage = function ( page ) {
	  if (page === 'drills') {
          ons.navigator.pushPage('drills.html');
      } else if (page === 'account') {
          ons.navigator.pushPage('account.html');
      } else {
          ons.navigator.pushPage('ranks.html');
      }
	}
}]);

app.controller('DrillsCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.page = {
        title : "Hello drills"
    };
    $scope.getDrills = function ( drills ) {
      if (drills === 'one') {
          ons.navigator.pushPage('drillOne.html');
      }
    }
}]);



app.controller('OneDrillCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.jsonp("http://www.lispyway.com/welldone?callback=JSON_CALLBACK").
        success(function ( resp ) {
          alert(resp.name);
        }).
        error(function ( error, status ) {
          alert(status);
        })
}]);