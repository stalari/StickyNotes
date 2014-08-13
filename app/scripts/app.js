'use strict';

/**
 * @ngdoc overview
 * @name stickyNotesApp
 * @description
 * # stickyNotesApp
 *
 * Main module of the application.
 */

var sn = angular.module('stickyNotesApp', [
            'ngAnimate',
            'ngCookies',
            'ngResource',
            'ngRoute',
            'ngSanitize',
            'ngTouch'
          ])
          .config(function ($routeProvider) {
            $routeProvider
              .when('/', {
                templateUrl: 'views/notes.html',
                controller: 'notesController'
              });
          });
