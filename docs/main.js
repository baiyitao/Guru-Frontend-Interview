var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {

    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    $http.get('http://interviewtest.getguru.com/seismic/data.json'，{
     header : {'Content-Type' : 'application/json; charset=UTF-8'}
  }).then(function(data) {
        $scope.data = data.data;

        for (var i = 0; i < $scope.data.length; i++) {
            $scope.data[i].time = new Date($scope.data[i].time)
            $scope.data[i].timeBefore = $scope.data[i].time.getFullYear() + "/" + $scope.data[i].time.getMonth() + "/" + ($scope.data[i].time.getDay() + 1);
            $scope.data[i].time = monthNames[$scope.data[i].time.getMonth()] + " " + ($scope.data[i].time.getDay() + 1) + ", " + $scope.data[i].time.getFullYear() + " @ " + $scope.data[i].time.getHours() + ":" + $scope.data[i].time.getMinutes();

            // console.log($scope.data[i].timeBefore);
        }
        // console.log($scope.data);
    });

    $scope.latlon = function(x, y) {
        alert("lat: " + x + ", lon: " + y)
    }

});
