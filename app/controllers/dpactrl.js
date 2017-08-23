angular.module('App')
.controller("DpaController",['ActivityPlanService', function(ActivityPlanService){


    ActivityPlanService.getPlanDays();
}]);