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
            $http.get('http://openstates.org/api/v1//bills/?state=' + $scope.state["code"] + '&sort=created_at&page=1&per_page=100&apikey=efe4a4e77a154868947e0e24593a32e7').success(function (data) {
                $scope.reports = angular.fromJson(data);

            })
        }
        $scope.getdetail=function(id,session){
            var legiscanapikey='e034b7ea7e6d048483197f62a7f8cfc6';
            id = id.replace(/[\s]/g, '');
            $http.get('https://api.legiscan.com/?key='+legiscanapikey+'&op=search&state=' + $scope.state["code"]+'&bill='+id).success(function (detaildata){
               $scope.billdetail = detaildata;
            })
        }
    });



/* *****************************************************************wip code*******************************************
 wip - either display the text or download after converting from base64
 $scope.gettext=function(billid){
 alert("in func" + billid);
 var legiscanapikey='e034b7ea7e6d048483197f62a7f8cfc6';
 $http.get('https://api.legiscan.com/?key='+legiscanapikey+'&op=getBillText&id='+billid).success(function (textdata){
 alert("in here2");
 $scope.billtext = atob(textdata.doc);
 //window.open("data:application/pdf;base64," + Base64.encode(billtext) );

 })
 }
 $scope.downloadPDF = function downloadPDF() {
 alert("in dl");
 var pdf = 'data:application;base64,'+ $scope.billtext;
 var dlnk = document.getElementById('dwnldLnk');
 dlnk.href = pdf;

 dlnk.click();


 alert('downloaded');

 }

 ********************************************************************* */