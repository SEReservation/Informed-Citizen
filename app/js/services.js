'use strict';

/* Services */

var informedCitizenServices = angular.module('informedCitizenServices', ['ngResource']);

informedCitizenServices.service('dataService',function($http){
   this.getData=function(callbackFunc){
       $http({
          method: 'GET',
           url: 'http://openstates.org/api/v1//bills/?state=ne&apikey=efe4a4e77a154868947e0e24593a32e7',
           params: ''

       }).success(function(data){
           callbackFunc(data);
       }).error(function(){
           alert("error");
       });
   }


}



);