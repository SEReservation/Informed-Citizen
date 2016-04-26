angular.module('userHome', [])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/userHome', {
    templateUrl:'userHome/userHome.html',
    controller:'UserHomeCtrl'
  });
}])

.controller('UserHomeCtrl', function ($scope, $http){


//This section handles the initial automatic detection.
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position){
        $scope.latitude = position.coords.latitude;
        $scope.longitude = position.coords.longitude;
        map = new google.maps.Map(document.getElementById("map"),
            {
              zoom: 8,
              center: new google.maps.LatLng($scope.latitude,$scope.longitude),
              mapTypeId: google.maps.MapTypeId.ROADMAP
            });
        var marker = new google.maps.Marker(
            {
              map: map,
              position:  new google.maps.LatLng($scope.latitude,$scope.longitude)
            });
        $http.get('http://congress.api.sunlightfoundation.com/legislators/locate?latitude=' + $scope.latitude +'&longitude='+$scope.longitude+'&apikey=efe4a4e77a154868947e0e24593a32e7').success(function (data) {
          $scope.reports = data.results;



        })

      })
    }


// This is where a new location is handled
  var geocoder;
  var map;

  /*start map and geocoder (for gps from address)*/
  $scope.initialize=function(address)
  {
    geocoder = new google.maps.Geocoder();


    var newlat;
    var newlong;

    geocoder.geocode( { 'address': address}, function(results, status)
    {
      if (status == google.maps.GeocoderStatus.OK)
      {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker(
            {
              map: map,
              position: results[0].geometry.location
            });

        newlong  = results[0].geometry.location.lng();
        newlat  = results[0].geometry.location.lat();
       // alert ("lat = "+ newlat + "   and long = "+newlong);

      }

      else
      {
        alert("Geocode was not successful for the following reason: " + status);
      }

      //finally send in a new api call with the information for the new location inserted
      $http.get('http://congress.api.sunlightfoundation.com/legislators/locate?latitude=' + newlat +'&longitude='+newlong+'&apikey=efe4a4e77a154868947e0e24593a32e7').success(function (data) {
        $scope.reports = data.results;

      })



    });




}
  });