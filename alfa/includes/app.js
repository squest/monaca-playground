var app = ons.bootstrap('vocabApp', ['onsen']);

app.controller('PageController', function ( $scope ) {
  ons.ready(function ( ) {

  });

})

var vocabTPA =
	[{word : "distance", definition : "Jarak"},
		{word : "virulent" , definition : "Bersifat seperti virus"},
		{word : "sarcasm", definition: "Berkelakuan baik"},
		{word : "territorial", definition: "Bersifat teritori"},
		{word : "whatever", definition: "Ini jawaban untuk whatever"}]

app.controller('AppController', function ( $scope ) {
	$scope.page = {title : "Zenius Vocab App"};
	$scope.changePage = function (targetPage) {
		if (targetPage === "tpa") {
			app.navi.pushPage('detail.html');
			$scope.tab = {
				title : "TPA",
				description : "Vocab list buat TPA",
				label : "Latihan TPA"
			};
			$scope.vocabList = vocabTPA;
			var currentSoal = Math.ceil(Math.random()*4);
			$scope.currentSoal = $scope.vocabList[currentSoal];
			$scope.answerChoices = $scope.vocabList;
		}
	}
})