/**
 * @ngdoc function
 * @name stickyNotesApp.directive:NotesTile
 * @description
 * # NotesTile directive
 */

sn.directive('notesTile', function(){
     'use strict';
        return {
            restrict: 'AE',
            templateUrl: "views/templates/notestile.html"
        }
});