'use strict';

/**
 * @ngdoc function
 * @name stickyNotesApp.directive:AddNote
 * @description
 * # AddNote directive
 */

angular.module('stickyNotesApp')
    .directive('addNote', function(){
        return {
            restrict: 'AE',
            templateUrl: "views/templates/addnote.html"
        }
    });