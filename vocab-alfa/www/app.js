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
    $scope.getPage = function ( page ) {
      navi.pushPage('drill-tpa1.html');
    }
}])

var setTpa1 = [
    {w : "Mangkus" , d : "Efektif, tepat sasaran"},
    {w : "Sangkil", d : "Efisien, menggunakan sumber daya relatif kecil untuk mencapai sasaran"},
    {w : "Linimasa", d : "Urutan kejadian/berita secara kronologis"},
    {w : "Demosi", d : "Penurunan jawaban relatif dari jabatan saat ini"},
    {w : "Mutasi", d : "Perubahan bentuk dari suatu entitas"},
    {w : "Permutasi", d : "Saling bertukar posisi atau jabatan" },
    {w : "Radikal", d : "Mengakar"},
    {w : "Anarki", d : "Kondisi tanpa adanya kepemimpinan"},
    {w : "Pragmatis", d : "Kecenderungan untuk melihat daya guna dari suatu hal"}
];

app.controller('DrillCtrl', ['$scope', function ($scope) {
    $scope.currentSet = setTpa1;
    function randSoal (soals) {
        return Math.floor(Math.random() * soals);
    }
    var curState = Math.floor(Math.random() * $scope.currentSet.length);
    $scope.answerChoices = [];
    for (var i = 0; i < 5 ; i++) {
        current = randSoal($scope.currentSet.length);
        $scope.answerChoices.push($scope.currentSet[current]);
    }
    var answer = Math.floor(Math.random() * 5);
    $scope.currentSoal = $scope.currentSet[curState];
    $scope.answerChoices[answer] = $scope.currentSoal;

}])
currentSet[curState];
    $scope.answerChoices[answer] = $scope.currentSoal;
    $scope.releasePage = function () {
      navi.popPage();
    };

}]);
