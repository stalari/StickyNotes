/**
 * @ngdoc function
 * @name stickyNotesApp.directive:AddNote
 * @description
 * # AddNote directive
 */

sn.directive('addNote', function(){
      'use strict';
        return {
            restrict: 'AE',
            templateUrl: "views/templates/addnote.html"
        }
    });