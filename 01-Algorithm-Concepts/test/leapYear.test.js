const { leapYear } = require("../src/ToDo1/leapYear");

test('The year 1900 is not a leap year', () => {
	expect(leapYear(1900)).toBe("Is not a leap year");
});

test('The year 2012 is a leap year', () => {
	expect(leapYear(2012)).toBe("Is a leap year");
});

test('The year 2100 is not a leap year', () => {
	expect(leapYear(2100)).toBe("Is not a leap year");
});

test('The year 2024 is a leap year', () => {
	expect(leapYear(2024)).toBe("Is a leap year");
});

test('The year 2200 is not a leap year', () => {
	expect(leapYear(2200)).toBe("Is not a leap year");
});