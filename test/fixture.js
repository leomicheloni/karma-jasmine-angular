describe("calculator test", function () {
	var calculator;

	beforeEach(module("myapp"));

	beforeEach(inject(function ($injector) {
			calculator = $injector.get("calculatorService");
		}));

	it("simple add should add", function () {
		var result = calculator.add(3, 5);
		expect(result).toBe(8);

	});

});
