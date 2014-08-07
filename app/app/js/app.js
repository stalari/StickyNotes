var app = angular.module("StickyNotesApplication", ['ngRoute']).config(function ($routeProvider) {

    $routeProvider.when("/", {
        templateUrl: "app/view/notes.html",
        controller: "notes"
    });


});

app.directive('addNote', function(){
  return {
    restrict: 'AE',
    templateUrl: "app/view/templates/addnote.html",
  }
})
.directive('notesTile', function(){
  return {
    restrict: 'AE',
    templateUrl: "app/view/templates/notestile.html",
  }
});

app.controller("commonComponents", function ($scope, $rootScope) {
	$rootScope.tile = 'note-tile-false';
	$scope.showHideSideBar = function(){
		$scope.showSideBar = $scope.showSideBar ? false : true;
	}

	$scope.setTile = function(val){
		$rootScope.tile = val;
	}


})
.controller("notes", function ($scope, $rootScope) {
	$scope.addListNote = false;
	$scope.editIndex = undefined;
	//$scope.tile = $rootScope.tile;
	$scope.color = 'white';
	$scope.colors = ['white', 'blue', 'green', 'orange', 'yellow'];
	$scope.newList = [{value: '', selected: false}];
	$scope.notes = JSON.parse(localStorage.getItem("StickyNotesApplication")) || [];
	//$scope.notes = [{type: 'Note', data: 'test the note', title: 'Note'}, {type: 'ListNote', data: [{value: 'item1', selected: true}, {value: 'item2', selected: false}, {value: 'item3', selected: false}], title: 'List Note'}/*, {type: 'Image', data: 'image note test', title: 'Image Note', image: ''}*/];

	$scope.createNote = function(){
		if($scope.addListNote){
			$scope.newList.pop();
			$scope.editIndex === undefined ? $scope.notes.push({type: 'ListNote', data: $scope.newList, title: $scope.title, color: $scope.color}) : $scope.notes[$scope.editIndex] = {type: 'ListNote', data: $scope.newList, title: $scope.title, color: $scope.color};
		}else if($scope.addImageNote){
			$scope.editIndex === undefined ? $scope.notes.push({type: 'ImageNote', data: $scope.addNote, title: $scope.title, color: $scope.color, img: $('img').attr('src')}) : $scope.notes[$scope.editIndex] = {type: 'ImageNote', data: $scope.addNote, title: $scope.title, color: $scope.color, img: $('img').attr('src')};
		}else{
			$scope.editIndex === undefined ? $scope.notes.push({type: 'Note', data: $scope.addNote, title: $scope.title, color: $scope.color}) : $scope.notes[$scope.editIndex] = {type: 'Note', data: $scope.addNote, title: $scope.title, color: $scope.color};
		}
		localStorage.setItem("StickyNotesApplication", JSON.stringify($scope.notes));
		$scope.clearValues();

	}

	$scope.clearValues = function(){
		$scope.newList = [{value: '', selected: false}];
		$scope.addNote = "";
		$scope.title = "";
		$scope.editIndex = undefined;
		$scope.addListNote = false;
		$scope.addImageNote = false;
		$scope.color = 'white';
	}

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
			$scope.addImageNote = true;
		}else{
			$scope.addListNote = true;
			$scope.newList = $scope.notes[index].data;
		}
		$scope.title =  $scope.notes[index].title;
		$scope.color = 	$scope.notes[index].color;
	}

	$scope.toggleList = function(){
		$scope.addListNote = $scope.addListNote ? false : true;
		$scope.addImageNote = false;
	}

	$scope.toggleImage = function(){
	  $scope.addImageNote = true; 
	}

	$scope.$watch('newList[newList.length-1].value', function(val) {
		  if(val != ''){
       $scope.newList.push({value: '', selected: false});
		  }
  });

  $rootScope.$watch('tile', function(val){
  	$scope.tile = $rootScope.tile;
  })

  $scope.deleteNote = function (index){
  	$scope.notes.splice(index, 1);    
  	$scope.updateNotes();
	}

  $scope.updateNotes = function(){
  	localStorage.setItem("StickyNotesApplication", JSON.stringify($scope.notes));
  }

  $scope.removeList = function(index){
  	$scope.newList.splice(index, 1);
  }

});