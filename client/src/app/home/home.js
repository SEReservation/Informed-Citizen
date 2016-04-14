angular.module('home', [])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl:'home/home.html',
    controller:'HomeCtrl'
  });
}])

.controller('HomeCtrl');