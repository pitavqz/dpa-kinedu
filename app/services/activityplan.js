'use strict';

angular.module('ActivityPlanService',[])
.factory('ActivityPlanService', ['$http', function($http){
	var urlBase = 'http://demo.kinedu.com/api/v2/babies/1/activity_plans/current';
	var planData = {};
	// var config = {headers: {"Authorization": "Token token=09d23abf0c1d10e37592819dd8157ee06f22c0d308a8906d21e25c0de4f838859e0d5c1337aca40103b028ec81e948c6be382fce7c82d6ad273ad4fcd16e8f58"}};
	var config = {
   method: "GET",
   headers: {
    "Authorization": "Token token=09d23abf0c1d10e37592819dd8157ee06f22c0d308a8906d21e25c0de4f838859e0d5c1337aca40103b028ec81e948c6be382fce7c82d6ad273ad4fcd16e8f58",
     "Access-Control-Allow-Origin": "*",
     "Cache-Control": "no-cache, no-store, must-revalidate",
     "Pragma": "no-cache",
     "Expires": "0"
   }
  };
  return{
   getPlanDays: function(){
     console.log("sharepoint sucks");
     return $http.get('http://demo.kinedu.com/api/v2/babies/1/activity_plans/current', {
	    headers: {
	        "Authorization": 'Token token=09d23abf0c1d10e37592819dd8157ee06f22c0d308a8906d21e25c0de4f838859e0d5c1337aca40103b028ec81e948c6be382fce7c82d6ad273ad4fcd16e8f58'
	    }
	  }).success(function(response){
	    console.log(response)
	  });
   }
  };



	// return{
	// 	getPlanDays: function(){
	// 		console.log(config);
	// 		return $http.get(urlBase,config);
	// 	}
	// };

}]);