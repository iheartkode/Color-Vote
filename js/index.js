var App = angular.module("App", ["firebase"]);

App.controller("AppCtrl", function($scope, $firebaseArray) {
  var ref = new Firebase("https://colorvote.firebaseio.com/");
  $scope.colors = $firebaseArray(ref);
  $scope.add = function() {
    if ($scope.name) {
      $scope.colors.$add({
        name: $scope.name,
        count: 0
      });
    } else {
      alert("Can't be blank..");
    }
    $scope.name = "";
  };

  $scope.vote = function(color) {
    color.count += 1;
    $scope.colors.$save(color);
  };
  
  $scope.delete = function(color) {
    $scope.colors.$remove(color);
  };
});