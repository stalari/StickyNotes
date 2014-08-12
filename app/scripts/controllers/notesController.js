'use strict';

/**
 * @ngdoc function
 * @name stickyNotesApp.controller:NotesController
 * @description
 * # NotesController
 * Controller of the stickyNotesApp
 */
angular.module('stickyNotesApp')
    .controller("notesController",function ($scope, $rootScope) {
        $scope.addListNote = false;
        $scope.editIndex = undefined;
        $scope.input = {'color': 0};
        $scope.newList = [{value: '', selected: false}];
        $scope.notes = JSON.parse(localStorage.getItem("stickyNotesApp")) || [];
        $scope.colorInspirationClasses = [
            'grapefruit', 'bittersweet', 'sunflower', 'grass',
            'mint', 'aqua', 'bluejeans', 'lavender',
            'pinkrose', 'lightgray', 'mediumgray', 'darkgray'
        ];

        $scope.highlight = function(a) {
            $scope.color = $scope.colorInspirationClasses[a];
        };
        $scope.createNote = function(){
            if($scope.addListNote){
                $scope.newList.pop();
                $scope.editIndex === undefined ? $scope.notes.push({type: 'ListNote', data: $scope.newList, title: $scope.title, color: $scope.color}) : $scope.notes[$scope.editIndex] = {type: 'ListNote', data: $scope.newList, title: $scope.title, color: $scope.color};
            }else if($scope.isImageNote){
                $scope.editIndex === undefined ? $scope.notes.push({type: 'ImageNote', data: $scope.addNote, title: $scope.title, color: $scope.color, img: $('img').attr('src')}) : $scope.notes[$scope.editIndex] = {type: 'ImageNote', data: $scope.addNote, title: $scope.title, color: $scope.color, img: $('.modal img').attr('src')};
            }else{
                $scope.editIndex === undefined ? $scope.notes.push({type: 'Note', data: $scope.addNote, title: $scope.title, color: $scope.color}) : $scope.notes[$scope.editIndex] = {type: 'Note', data: $scope.addNote, title: $scope.title, color: $scope.color};
            }
            localStorage.setItem("stickyNotesApp", JSON.stringify($scope.notes));
            $scope.clearValues();
        };

        $scope.clearValues = function(){
            $scope.newList = [{value: '', selected: false}];
            $scope.addNote = "";
            $scope.title = "";
            $scope.editIndex = undefined;
            $scope.addListNote = false;
            $scope.isImageNote = false;
            $scope.color = 'white';
        };

        $scope.prepareModal = function(index){
            $scope.editIndex = index;
            if($scope.notes[index].type === 'Note'){
                $scope.newList = [{value: '', selected: false}];
                $scope.addNote = $scope.notes[index].data;
            }else if($scope.notes[index].type === 'ImageNote'){
                $scope.newList = [{value: '', selected: false}];
                $scope.addNote = $scope.notes[index].data;
                $scope.noteImg = $scope.notes[index].img;
                $scope.addListNote = false;
                $scope.isImageNote = true;
            }else{
                $scope.addListNote = true;
                $scope.newList = $scope.notes[index].data;
            }
            $scope.title =  $scope.notes[index].title;
//            $scope.color =  $scope.notes[index].color;

        };

        $scope.toggleList = function(){
            $scope.addListNote = $scope.addListNote ? false : true;
            $scope.isImageNote = false;
        };

        $scope.$watch('newList[newList.length-1].value', function(val) {
            if(val != ''){
                $scope.newList.push({value: '', selected: false});
            }
        });

        $rootScope.$watch('tile', function(val){
            $scope.tile = $rootScope.tile;

        });

        $scope.deleteNote = function (index){
            $scope.notes.splice(index, 1);
            $scope.updateNotes();
        };

        $scope.updateNotes = function(){
            localStorage.setItem("stickyNotesApp", JSON.stringify($scope.notes));
        };

        $scope.removeList = function(index){
            $scope.newList.splice(index, 1);
        };

        $scope.imageUpload = false;
        $scope.toggleInsertImage = function() {
            $scope.imageUpload = $scope.imageUpload ? false : true;
        };

        $scope.toggleImage = function(){
            if(!$scope.isImageNote){
                $('.fileinput img').remove();
                $scope.isImageNote = true;
            }
        };


    });

angular.module('stickyNotesApp').directive("colorInspiration", function() {
    return {
        scope: {val: '=ngModel'},
        link: function(scope, element, attrs, ngModel) {

            scope.$watch(val, function(newValue, oldValue) {
                //console.log("watched it", scope.val);
                if (element.hasClass(oldValue)) {
                    element.removeClass(oldValue);
                }
                element.addClass(newValue);
            });
        }
    }
});
