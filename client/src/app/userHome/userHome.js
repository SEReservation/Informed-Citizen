angular.module('userHome', [])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/userHome', {
    templateUrl:'userHome/userHome.html',
    controller:'UserHomeCtrl'
  });
}])

.controller('UserHomeCtrl');