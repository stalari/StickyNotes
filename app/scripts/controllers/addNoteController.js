/**
 * @ngdoc function
 * @name stickyNotesApp.controller:AddNoteController
 * @description
 * # AddNoteController
 */
sn.controller("addNoteController",function ($scope) {
    'use strict';

    $scope.createNote = function(){
        if($scope.isListNote){
            $scope.newList.pop();
            $scope.editIndex ? $scope.notes[$scope.editIndex] = {type: 'ListNote', data: $scope.newList, title: $scope.title, color: $scope.color} :$scope.notes.push({type: 'ListNote', data: $scope.newList, title: $scope.title, color: $scope.color});
        }else if($scope.isImageNote){
            $scope.editIndex ? $scope.notes[$scope.editIndex] = {type: 'ImageNote', data: $scope.addNote, title: $scope.title, color: $scope.color, img: $('.modal img').attr('src')} : $scope.notes.push({type: 'ImageNote', data: $scope.addNote, title: $scope.title, color: $scope.color, img: $('img').attr('src')});
        }else{
            $scope.editIndex ? $scope.notes[$scope.editIndex] = {type: 'Note', data: $scope.addNote, title: $scope.title, color: $scope.color} :$scope.notes.push({type: 'Note', data: $scope.addNote, title: $scope.title, color: $scope.color});
        }
        localStorage.setItem("stickyNotesApp", JSON.stringify($scope.notes));
        $scope.clearValues();
    };

    $scope.toggleList = function(){
        $scope.isListNote = $scope.isListNote ? false : true;
        $scope.isImageNote = false;
    };

    $scope.removeList = function(index){
        $scope.newList.splice(index, 1);
    };

    $scope.imageUpload = false;
    $scope.toggleImage = function(){
        if(!$scope.isImageNote){
            $('.fileinput img').remove();
            $scope.isImageNote = true;
        }
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
});


