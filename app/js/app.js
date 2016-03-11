'use strict';

// Declare app level module which depends on views, and components
var informedCitizen = angular.module('informedCitizen', [
  'ngRoute',
  'informedCitizenControllers',
    'informedCitizenServices'

]);


informedCitizen.config(['$routeProvider',
  function($routeProvider) {

    $routeProvider.
    when('/home', {
      templateUrl: 'partials/home.html',
      controller: 'homeCtrl'
    }).
    when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'loginCtrl'
    }).
    when('/userhome', {
      templateUrl: 'partials/userHome.html',
      controller: 'userHomeCtrl'
    }).
    when('/billsearch', {
      templateUrl: 'partials/billSearch.html',
      controller: 'billSearchCtrl'
    }).
    when('/bio', {
      templateUrl: 'partials/bio.html',
      controller: 'bioCtrl'
    }).
    when('/bills', {
      templateUrl: 'partials/bills.html',
      controller: 'billsCtrl'
    }).
    otherwise({
      redirectTo: '/home'
    });



  }]);
