angular.module('searchBills', [])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/searchBills', {
            templateUrl: 'searchBills/searchBills.html',
            controller: 'SearchCtrl'
        });
    }])

    .controller('SearchCtrl', function ($scope, $http) {
        $scope.selectedState = null;
        $scope.state = "";
        $scope.states = [{
            "name": "Alabama",
            "code": "Al"
        },
            {
                "name": "Alaska",
                "code": "Ak"
            },
            {
                "name": "Arizona",
                "code": "Az"
            },
            {
                "name": "Arkansas",
                "code": "Ar"
            },
            {
                "name": "California",
                "code": "Ca"
            },
            {
                "name": "Colorado",
                "code": "Co"
            },
            {
                "name": "Connecticut",
                "code": "Ct"
            },
            {
                "name": "Delaware",
                "code": "De"
            },
            {
                "name": "Florida",
                "code": "Fl"
            },
            {
                "name": "Georgia",
                "code": "Ga"
            },
            {
                "name": "Hawaii",
                "code": "Hi"
            },
            {
                "name": "Idaho",
                "code": "Id"
            },
            {
                "name": "Illinois",
                "code": "Il"
            },
            {
                "name": "Indiana",
                "code": "In"
            },
            {
                "name": "Iowa",
                "code": "Ia"
            },
            {
                "name": "Kansas",
                "code": "Ks"
            },
            {
                "name": "Kentucky",
                "code": "Ky"
            },
            {
                "name": "Louisiana",
                "code": "La"
            },
            {
                "name": "Maine",
                "code": "Me"
            },
            {
                "name": "Maryland",
                "code": "Md"
            },
            {
                "name": "Massachusetts",
                "code": "Ma"
            },
            {
                "name": "Michigan",
                "code": "Mi"
            },
            {
                "name": "Minnesota",
                "code": "Mn"
            },
            {
                "name": "Mississippi",
                "code": "Ms"
            },
            {
                "name": "Missouri",
                "code": "Mo"
            },
            {
                "name": "Montana",
                "code": "Mt"
            },
            {
                "name": "Nebraska",
                "code": "Ne"
            },
            {
                "name": "Nevada",
                "code": "Nv"
            },
            {
                "name": "New Hampshire",
                "code": "Nh"
            },
            {
                "name": "New Jersey",
                "code": "Nj"
            },
            {
                "name": "New Mexico",
                "code": "Nm"
            },
            {
                "name": "New York",
                "code": "Ny"
            },
            {
                "name": "North Carolina",
                "code": "Nc"
            },
            {
                "name": "North Dakota",
                "code": "Nd"
            },
            {
                "name": "Ohio",
                "code": "Oh"
            },
            {
                "name": "Oklahoma",
                "code": "Ok"
            },
            {
                "name": "Oregon",
                "code": "Or"
            },
            {
                "name": "Pennsylvania",
                "code": "Pa"
            },
            {
                "name": "Rhode Island",
                "code": "Ri"
            },
            {
                "name": "South Carolina",
                "code": "Sc"
            },
            {
                "name": "South Dakota",
                "code": "Sd"
            },
            {
                "name": "Tennessee",
                "code": "Tn"
            },
            {
                "name": "Texas",
                "code": "Tx"
            },
            {
                "name": "Utah",
                "code": "Ut"
            },
            {
                "name": "Vermont",
                "code": "Vt"
            },
            {
                "name": "Virginia",
                "code": "Va"
            },
            {
                "name": "Washington",
                "code": "Wa"
            },
            {
                "name": "West Virginia",
                "code": "Wv"
            },
            {
                "name": "Wisconsin",
                "code": "Wi"
            },
            {
                "name": "Wyoming",
                "code": "Wy"
            }];


        $scope.myChange = function () {
            $http.get('http://openstates.org/api/v1//bills/?state=' + $scope.state["code"] + '&apikey=efe4a4e77a154868947e0e24593a32e7').success(function (data) {
                $scope.reports = angular.fromJson(data);
            })
        };

    });