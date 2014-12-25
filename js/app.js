var app = angular.module("myapp", []);

app.factory("calculatorService", function () {
	return {
		add : function (a, b) {
			return a + b;
		}
	};

});

app.controller("mainController", function ($scope) {});
