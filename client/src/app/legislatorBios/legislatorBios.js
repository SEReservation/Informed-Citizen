angular.module('legislatorBios', [])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/legislatorBios', {
    templateUrl:'legislatorBios/legislatorBios.html',
    controller:'BiosCtrl'
  });
}])

.controller('BiosCtrl', ['$scope', '$location', function ($scope, $location) {

}]);