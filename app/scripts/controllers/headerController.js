'use strict';

/**
 * @ngdoc function
 * @name stickyNotesApp.controller:HeaderController
 * @description
 * # HeaderController
 * Controller of the stickyNotesApp
 */
sn.controller('headerController', function ($scope, $rootScope) {
        $rootScope.tile = 'gridview';
        $scope.showHideSideBar = function(){
            $('#sidebar').css('margin-left', '0px');
        };

        $scope.hideSideBar = function(){
            $('#sidebar').css('margin-left', '-291px');
        };

        $scope.changeView = function(val){
            $rootScope.tile = val;
        };
});