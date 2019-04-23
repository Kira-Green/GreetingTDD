"use strict";

const greet = require("./index");

describe("greet", () => {
	it(`should interpolate name in a simple greeting. For example, when name is "Bob", the method should return a string "Hello, Bob."`, () => {
		expect(greet("Bob")).toEqual("Hello, Bob.");
	});
	it(`when name is null, then the method should return the string "Hello, my friend."`, () => {
		expect(greet()).toEqual("Hello, my friend.");
	});
	it(`When name is all uppercase, then the method should shout back to the user. For example, when name is "JERRY" then the method should return the string "HELLO JERRY!"`, () => {
		expect(greet("BOB")).toEqual("HELLO, BOB.");
	});
	it(`When name is an array of two names, then both names should be printed. For example, ["Jill", "Jane"], then the method should return the string "Hello, Jill and Jane."`, () => {
		expect(greet(["Jane", "Jill"])).toEqual("Hello, Jane and Jill.");
	});
	it(`When name represents more than two names, separate them with commas and close with an Oxford comma and "and".`, () => {
		expect(greet(["Jane", "Jill", "Jack"])).toEqual(
			"Hello, Jane, Jill, and Jack."
		);
	});
});
