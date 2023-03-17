const { changeTwoWords } = require("../src/ToDo1/excersises");

test("Change myNumber for myName", () => {
	let myNumber = "42";
	let myName = "oscar"

	expect(changeTwoWords(myNumber, myName)).toBe(`${myName} ${myNumber}`);
})

test("Change myName for myNumber", () => {
	let myNumber = "42";
	let myName = "oscar";

	expect(changeTwoWords(myName, myNumber)).toBe(`${myNumber} ${myName}`)
})