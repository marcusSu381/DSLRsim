'use strict';

/**
 * @ngdoc function
 * @name iat381Lab2App.controller:DemoCtrl
 * @description
 * # DemoCtrl
 * Controller of the iat381Lab2App
 */
angular.module('iat381Lab2App')
  .controller('DemoCtrl', function ($scope) {
    $scope.sfu = [
    {'name': 'IAT381',
     'content': 'Web app'},
    {'name': 'IAT352',
     'content': 'Back end'},
    {'name': 'IAT351',
     'content': 'Unknow'}
  ];
  $scope.demotext = "This is the demo page";
  });
