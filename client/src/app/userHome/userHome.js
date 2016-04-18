angular.module('userHome', [])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/userHome', {
    templateUrl:'userHome/userHome.html',
    controller:'UserHomeCtrl'
  });
}])

.controller('UserHomeCtrl', function ($scope, $http){

  var mylat = 0;
  var mylong = 0;

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position){
        $scope.latitude = position.coords.latitude;
        $scope.longitude = position.coords.longitude;
        $http.get('http://congress.api.sunlightfoundation.com/legislators/locate?latitude=' + $scope.latitude +'&longitude='+$scope.longitude+'&apikey=efe4a4e77a154868947e0e24593a32e7').success(function (data) {
          $scope.reports = data.results;


        })

      })
    }



});