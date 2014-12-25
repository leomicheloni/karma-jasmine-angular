describe("calculator test", function () {
	var calculator;
	var controller;
	
	beforeEach(module("myapp"));

	beforeEach(inject(function ($rootScope, $controller, $injector) {
			calculator = $injector.get("calculatorService");
			controller = $controller("mainController", {
					$scope : $rootScope
				});
		}));

	it("simple add should add", function () {
		var result = calculator.add(3, 5);
		expect(result).toBe(8);

	});

	it("controller should exist", function () {
		expect(controller).not.toBe(undefined);
	});

});
