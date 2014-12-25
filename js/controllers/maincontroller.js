app.controller("mainController", function ($scope, calculatorService) {

	$scope.add = function(){
		return calculatorService.add($scope.a, $scope.b);
	}

});