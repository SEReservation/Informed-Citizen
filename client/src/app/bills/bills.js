angular.module('bills', [])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/bills', {
    templateUrl:'bills/bills.html',
    controller:'BillsCtrl'
  });
}])

.controller('BillsCtrl');