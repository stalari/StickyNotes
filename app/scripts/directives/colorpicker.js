/**
 * @ngdoc function
 * @name stickyNotesApp.directive:ColorInspiration
 * @description
 * # ColorInspiration directive
 */

sn.run(function($templateCache) {
    $templateCache.put('colorpicker.html',
                '<div class="highlights palette">'+
                    '<p>'+
                         '<span ng-repeat="c in $parent.colorInspirationClasses" ng-class="c" ng-click="highlight(c)"></span>'+
                    '</p>'+
                '</div>');
}).directive("colorInspiration", function($templateCache, $rootScope) {
    'use strict';
    return {
        restrict: "AE",
        scope: {
            isNoteTile: "@"
        },
        template: $templateCache.get('colorpicker.html'),
        link: function(scope, elem, attrs){
            scope.highlight = function(color){
                if(scope.isNoteTile){
                    var noteEle = elem.closest('.note'),
                        noteIsolatedScope = elem.closest('.note').scope(),
                        index = noteIsolatedScope.$index;

                    noteIsolatedScope.note["color"] = color;

                    $rootScope.$broadcast("note-bgcolor-changed", color, index);
                  //  noteIsolatedScope.$parent.$parent.notes[index]["color"] = color;
                } else{
                    scope.$parent.color = color;
                }
            }
        }
    }
});