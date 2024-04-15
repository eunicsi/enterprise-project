import { classNames } from "shared/lib/classNames/classNames";

describe("classNames", () => {
	test("with first param", () => {
		const expected = "class";
		expect(classNames("class")).toBe(expected);
	});

	test("with additional params", () => {
		const expected = "class class1 class3";
		expect(classNames("class", {}, ["class1", "class3"])).toBe(expected);
	});

	test("with mods", () => {
		const expected = "class class1 class3 hovered scrollable";
		expect(classNames(
			"class",
			{ hovered: true, test: false, scrollable: true },
			["class1", "class3"],
		)).toBe(expected);
	});

	test("with undefined", () => {
		const expected = "class class1 class3 hovered";
		expect(classNames(
			"class",
			{ hovered: true, test: false, scrollable: undefined },
			["class1", "class3"],
		)).toBe(expected);
	});
});
