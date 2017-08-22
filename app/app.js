angular
.module("App",['main',"ngAnimate","ngAria",'ngMaterial','ngRoute','activityCard']);

angular.module("main",[]);

 angular.module("main").controller("DpaController",function(){

    this.imagePath = 'assets/images/card-image-day.png';
    this.iconPath = 'assets/images/icon-kid.png';
});