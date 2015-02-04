'use strict';

/**
 * @ngdoc function
 * @name iat381Lab2App.controller:DemoCtrl
 * @description
 * # DemoCtrl
 * Controller of the iat381Lab2App
 */
angular.module('iat381Lab2App')
  .controller('HomeCtrl', function ($scope) {
    $scope.settings = [
    {'filename': '1',
     'aperture': 'f/2'},
    {'filename': '2',
     'aperture': 'f/2.8'},
     {'filename': '3',
     'aperture': 'f/4'},
     {'filename': '4',
     'aperture': 'f/5.6'},
     {'filename': '5',
     'aperture': 'f/8'},
    {'filename': '6',
     'aperture': 'f/11'},
     {'filename': '7',
     'aperture': 'f/16'},
     {'filename': '8',
     'aperture': 'f/22'}
  ];
  $scope.demotext = "This is the demo page";
  });