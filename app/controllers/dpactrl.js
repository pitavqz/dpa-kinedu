angular.module('App')
.controller("DpaController",['$scope','$http','$mdDialog','ActivityPlanService', function($scope,$http,$mdDialog,ActivityPlanService){

	var vm = this;
	vm.planDays = [];
	getPlan();
	vm.currentNavItem = '1';
	function getPlan(){
		return ActivityPlanService.getPlanDays().then(function(response){
			vm.planDays = response.data.activity_plan.days;
		});
	}

	vm.nextDay = function(){
		console.log("NGCLICK NEXT");
		if(vm.currentNavItem < 5){
			vm.currentNavItem++;
		}
	}

	vm.previousDay = function(){
		if(vm.currentNavItem != 1){
			vm.currentNavItem--;
		}
	}

	vm.showDetail = function($event,detailInfo){
		$mdDialog.show({
			controller: DialogController,
			parent:  angular.element(document.body),
			targetEvent: $event,
			template:
				  '<md-dialog>' +
				  '<md-toolbar>'+
				  	'<div class="md-toolbar-tools">'+
				  		'<h2>{{items.content.name}}</h2>'+
				  	'</div>'+
				  '</md-toolbar'+
		          '  <md-dialog-content>'+
				  		'<img ng-src="{{items.content.thumbnails.size4}}">'+
		          		'<span class="detail-title">Description:</span>'+
		          		'<p>{{items.content.description}}</p>' +
		          '  </md-dialog-content>' +
		          '</md-dialog>',
		    locals: {
		           items: detailInfo
		    },
		    clickOutsideToClose: true,
      		escapeToClose: true
		});
	}

	function DialogController($scope, $mdDialog,items) {
		$scope.items = items;
		console.log($scope.items);
	    this.hide = function() {
	      $mdDialog.hide();
	    };

	    this.cancel = function() {
	      $mdDialog.cancel();
	    };

  	}
}]);