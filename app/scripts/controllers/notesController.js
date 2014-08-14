/**
 * @ngdoc function
 * @name stickyNotesApp.controller:NotesController
 * @description
 * # NotesController
 * Controller of the stickyNotesApp
 */
sn.controller("notesController",function ($scope, $rootScope) {
        'use strict';

        $scope.color;
        $scope.isListNote;
        $scope.editIndex;
        $scope.newList = [{value: '', selected: false}];
        $scope.notes = JSON.parse(localStorage.getItem("stickyNotesApp")) || [];
        $scope.colorInspirationClasses = [
            'grapefruit', 'bittersweet', 'sunflower', 'grass',
            'mint', 'aqua', 'bluejeans', 'lavender',
            'pinkrose', 'lightgray', 'mediumgray', 'darkgray'
        ];

        $scope.$watch('newList[newList.length-1].value', function(val) {
            if(val != ''){
                $scope.newList.push({value: '', selected: false});
            }
        });

        $scope.toggleInsertImage = function() {
            $scope.imageUpload = $scope.imageUpload ? false : true;
        };
    });


