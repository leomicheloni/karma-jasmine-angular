describe("calculator test", function () {
	var calculator;
	var controller;
	var scope;
	
	beforeEach(module("myapp"));

	beforeEach(inject(function ($rootScope, $controller, $injector) {
			calculator = $injector.get("calculatorService");
			scope = $rootScope.$new;
			
			controller = $controller("mainController", {
					$scope : scope
				});
		}));

	it("simple add should add", function () {
		var result = calculator.add(3, 5);
		expect(result).toBe(8);

	});

	it("controller should exist", function () {
		expect(controller).not.toBe(undefined);
	});

	it("controller call add method if add action is called", function () {
		scope.a = 1;
		scope.b = 3;
		var result = scope.add();
		expect(result).toBe(4);
	});
	

});
