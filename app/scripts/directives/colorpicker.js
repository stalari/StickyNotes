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
                         '<span ng-repeat="c in colorInspirationClasses" ng-class="c" ng-click="highlight(c)"></span>'+
                    '</p>'+
                '</div>');
}).directive("colorInspiration", function($templateCache) {
    'use strict';
    return {
        restrict: 'AE',
        scope: true,
        template: $templateCache.get('colorpicker.html')
    }
});