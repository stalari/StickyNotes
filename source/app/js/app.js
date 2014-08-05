var app = angular.module("StickyNotesApplication", ['ngRoute']).config(function ($routeProvider) {

    $routeProvider.when("/", {
        templateUrl: "app/view/notes.html",
        controller: "notes"
    });


});

app.directive('noteInterface', function(){
  return {
    restrict: 'AE',
    templateUrl: "app/view/templates/noteInterface.html",
  }
});

app.controller("commonComponents", function ($scope) {
	$scope.showHideSideBar = function(){
		$scope.showSideBar = $scope.showSideBar ? false : true;
	}


})
.controller("notes", function ($scope) {
	$scope.addListNote = false;
	$scope.newList = [{value: '', selected: false}];
	$scope.notes = JSON.parse(localStorage.getItem("StickyNotesApplication")) || [];
	//$scope.notes = [{type: 'Note', data: 'test the note', title: 'Note'}, {type: 'ListNote', data: [{value: 'item1', selected: true}, {value: 'item2', selected: false}, {value: 'item3', selected: false}], title: 'List Note'}/*, {type: 'Image', data: 'image note test', title: 'Image Note', image: ''}*/];

	$scope.createNote = function(){
		if($scope.addListNote){
			$scope.newList.pop();
			$scope.notes.push({type: 'ListNote', data: $scope.newList, title: $scope.title});
		}else{
			$scope.notes.push({type: 'Note', data: $scope.addNote, title: $scope.title});
		}
		localStorage.setItem("StickyNotesApplication", JSON.stringify($scope.notes));
		$scope.newList = [{value: '', selected: false}];
		$scope.addNote = "";
		$scope.title = "";

	}

	$scope.toggleList = function(){
		$scope.addListNote = $scope.addListNote ? false : true;
	}

	$scope.$watch('newList[newList.length-1].value', function(val) {
		  if(val != ''){
       $scope.newList.push({value: '', selected: false});
		  }
   });

});