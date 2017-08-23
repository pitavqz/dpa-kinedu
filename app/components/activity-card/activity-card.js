'use strict';

angular.module("activityCard", [])
  .component("activityCard", {
    	templateUrl: "./components/activity-card/activity-card.html",
	bindings: {
		key : '<'
	},
	controller: function () {
      var vm = this;
      vm.$onInit = function (){
      	console.log(vm.key);
      }
    }
 });
