'use strict';

angular.module('ActivityPlanService',[])
.factory('ActivityPlanService', ['$http', function($http){
	var urlBase = 'http://dpakinedu.azurewebsites.net/_api/dpa-kinedu';
	var planData = {};
	
  var config = {
   method: "GET",
   headers: {
    "Access-Control-Allow-Origin": "*",
     "Cache-Control": "no-cache, no-store, must-revalidate",
     "Pragma": "no-cache",
     "Expires": "0"
   }
  };

  return{
   getPlanDays: function(){
     return $http.get(urlBase,config);
   }
  };

}]);