/**
 * @ngdoc function
 * @name stickyNotesApp.controller:TileListController
 * @description
 * # TileListController
 */
sn.controller("tileListController",function ($scope) {
    'use strict';

    $scope.prepareModal = function(index){
        $scope.editIndex = index;
        if($scope.notes[index].type === 'Note'){
            $scope.newList = [{value: '', selected: false}];
            $scope.addNote = $scope.notes[index].data;
        }else if($scope.notes[index].type === 'ImageNote'){
            $scope.newList = [{value: '', selected: false}];
            $scope.addNote = $scope.notes[index].data;
            $scope.noteImg = $scope.notes[index].img;
            $scope.isListNote = false;
            $scope.isImageNote = true;
        }else{
            $scope.isListNote = true;
            $scope.newList = $scope.notes[index].data;
        }
        $scope.title =  $scope.notes[index].title;
        $scope.color =  $scope.notes[index].color;
    };

    $scope.deleteNote = function (index){
        $scope.notes.splice(index, 1);
        $scope.updateNotes();
    };

    $scope.updateNotes = function(){
        localStorage.setItem("stickyNotesApp", JSON.stringify($scope.notes));
    };

    $scope.clearValues = function(){
        $scope.newList = [{value: '', selected: false}];
        $scope.addNote = "";
        $scope.title = "";
        $scope.editIndex = undefined;
        $scope.isListNote = false;
        $scope.isImageNote = false;
        $scope.color = "";
    };

    $scope.$on("note-bgcolor-changed", function(event, color, index){
        $scope.notes[index].color = color;
        $scope.updateNotes();
    });

});


