'use strict';

/**
 * @ngdoc function
 * @name stickyNotesApp.directive:NotesTile
 * @description
 * # NotesTile directive
 */

angular.module('stickyNotesApp')
    .directive('notesTile', function(){
    return {
        restrict: 'AE',
        templateUrl: "views/templates/notestile.html"
    }
});