'use strict';

var myapp = angular
  .module('iat381Lab2App', [
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);
  myapp.config(function ($routeProvider) {
    $routeProvider
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'settingsCtrl'
      })
      .when('/ency', {
        templateUrl: 'views/ency.html',
        // controller: 'encyCtrl'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });

myapp.savelist=[];



