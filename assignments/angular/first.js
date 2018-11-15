var firstApp = angular.module('firstApp', []);
firstApp.controller('FirstController', function($scope) {
    
  $scope.names = [];
    $scope.updateMessage = function() {
        $scope.message = 'Hello ' + $scope.first + ' ' + $scope.last + '!';
        $scope.message = $scope.message.toUpperCase();
        $scope.first = $scope.first.toUpperCase();
        $scope.last = $scope.last.toUpperCase();
        var name = {first:$scope.first,last:$scope.last};
        $scope.names.push(name);
    };
 
});