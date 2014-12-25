describe("calculator test", function () {
	var calculator;

	beforeEach(module("myapp"));

	beforeEach(inject(function ($injector) {
			calculator = $injector.get("calculatorService");
		}));

});
