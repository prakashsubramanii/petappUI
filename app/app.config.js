'use strict';

angular.
  module('petsApp').
  config(['$routeProvider','$locationProvider',
    function config($routeProvider,$locationProvider) {

      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/home', {
          controller: 'petListController',
          template: '<pet-list></pet-list>'
        }).
        when('/pets', {
          controller: 'petListController',
          template: '<pet-list></pet-list>'
        }).
        when('/mypets', {
          controller: 'petListController',
          template: '<pet-list></pet-list>'
        }).
        when('/login', {
          controller: 'authenticationController',
          templateUrl: 'authentication/login.template.html'
        }).
        when('/signup', {
          controller: 'authenticationController',
          templateUrl: 'authentication/signup.template.html'
        }).
        when('/addpet', {
          controller: 'petListController',
          templateUrl: 'pet-list/addpet.html'
        }).
        when('/pets/:petId', {
          controller: 'petDetailController',
          template: '<pet-detail></pet-detail>'
        }).
        otherwise('/login');
    }
  ]);
