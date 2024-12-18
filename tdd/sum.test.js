test("dummy test", () => {
  expect(true).toBe(true);
});

import { sum } from "./sum.js";

describe("Test cases for sum function ", () => {
  const wrongDataTypeError = new Error("All arguments must be numbers");

  test("returns the sum of numbers", () => {
    expect(sum.sumOfNumbers(1, 2)).toBe(3);
    expect(sum.sumOfNumbers()).toBe(0);
    expect(sum.sumOfNumbers(1.2, 3.8, 1.0)).toBe(6.0);
  });

  test("should return 0 for no arguments", () => {
    expect(sum.sumOfNumbers()).toBe(0);
  });


  test("should return the value of the argument for no arguments", () => {
    expect(sum.sumOfNumbers()).toBe(0);
  });

  

  

  //   it("should throw an error when one or more arguments are not numbers", () => {
  //     expect(() => {
  //       sum.sumOfNumbers("helo", 1, undefined);
  //     }).toThrow(wrongDataTypeError);
  //   });
  //   expect(() => {
  //     sum.sumOfNumbers(1, 2, "9");
  //   }).toThrow(wrongDataTypeError);

  //   expect(() => {
  //     sum.sumOfNumbers("hello", "hi");
  //   }).toThrow(wrongDataTypeError);
});
