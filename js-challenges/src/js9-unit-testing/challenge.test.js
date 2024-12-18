import { describe } from "node:test";
import * as challenge from "./js9";

describe("greet test cases", () => {
  test("Should return correct string", () => {
    expect(challenge.greet()).toBe("Hello, nice to meet you");
  });

  it("should return a string", () => {
    expect(typeof challenge.greet()).toBe("string");
  });
});

describe("Sum of two numbers test cases", () => {
  const notEnoughArgsError = new Error("This function needs two parameters");
  const wrongDataTypeError = new Error(
    "Both firstNumber and secondNumber should be numbers"
  );

  test("Should add two numbers together", () => {
    expect(challenge.sumTwoNumbers(1, 2)).toBe(3);
    expect(challenge.sumTwoNumbers(3, 7)).toBe(10);
    expect(challenge.sumTwoNumbers(4, 1)).toBe(5);
  });

  it("should throw an error when less than 2 arguments are passed", () => {
    expect(() => {
      challenge.sumTwoNumbers(2);
    }).toThrow(notEnoughArgsError);
    expect(() => {
      challenge.sumTwoNumbers();
    }).toThrow(notEnoughArgsError);
    expect(() => {
      challenge.sumTwoNumbers("hello");
    }).toThrow(notEnoughArgsError);
  });

  it("should throw an error when one or more arguments are not numbers", () => {
    expect(() => {
      challenge.sumTwoNumbers("1", 2);
    }).toThrow(wrongDataTypeError);
    expect(() => {
      challenge.sumTwoNumbers("1", null);
    }).toThrow(wrongDataTypeError);

    expect(() => {
      challenge.sumTwoNumbers(2, []);
    }).toThrow(wrongDataTypeError);
    expect(() => {
      challenge.sumTwoNumbers("hello", "hi");
    }).toThrow(wrongDataTypeError);
  });
});

describe("Checking of Larger number test cases", () => {
  const notEnoughArgsError = new Error("This function needs two parameters");
  const wrongDataTypeError = new Error(
    "Both firstNumber and secondNumber should be numbers"
  );

  test("Should return string based on which number is larger", () => {
    expect(challenge.checkLarger(5, 5)).toBe("Both numbers are equal");
    expect(challenge.checkLarger(5, 1)).toBe("5 is bigger than 1");
    expect(challenge.checkLarger(1, 5)).toBe("5 is bigger than 1");
  });

  test("should return a string based on which number is larger", () => {
    expect(typeof challenge.checkLarger(1, 2)).toBe("string");
  });

  it("should throw an error when less than 2 arguments are passed", () => {
    expect(() => {
      challenge.checkLarger(2);
    }).toThrow(notEnoughArgsError);
    expect(() => {
      challenge.checkLarger();
    }).toThrow(notEnoughArgsError);
    expect(() => {
      challenge.checkLarger("hello");
    }).toThrow(notEnoughArgsError);
  });

  it("should throw an error when one or more arguments are not numbers", () => {
    expect(() => {
      challenge.checkLarger("1", 2);
    }).toThrow(wrongDataTypeError);
    expect(() => {
      challenge.checkLarger("1", null);
    }).toThrow(wrongDataTypeError);

    expect(() => {
      challenge.checkLarger(2, []);
    }).toThrow(wrongDataTypeError);
    expect(() => {
      challenge.checkLarger("hello", "hi");
    }).toThrow(wrongDataTypeError);
  });
});

describe("Filter Names by Length test cases", () => {
  const notEnoughArgsError = new Error("This function needs a parameter");
  const wrongDataTypeError = new Error("Names should be an array");

  test("Should return new array of names based on length", () => {
    expect(
      challenge.filterByLength(["Paul", "Calum", "Rebecca"])
    ).toMatchObject(["Paul", "Calum"]);
    expect(
      challenge.filterByLength(["Johnathan", "Sylvester", "Charlie"])
    ).toBe("Sorry, no valid names supplied");
    expect(challenge.filterByLength(["Tom", "Dick", "Harry"])).toMatchObject([
      "Tom",
      "Dick",
      "Harry",
    ]);
  });

  it("should throw an error when no arguments are passed", () => {
    expect(() => {
      challenge.filterByLength();
    }).toThrow(notEnoughArgsError);
  });

  it("should throw an error the argument is not an array", () => {
    expect(() => {
      challenge.filterByLength("1");
    }).toThrow(wrongDataTypeError);
    expect(() => {
      challenge.filterByLength(2);
    }).toThrow(wrongDataTypeError);

    expect(() => {
      challenge.filterByLength(true);
    }).toThrow(wrongDataTypeError);
  });
});

describe("Reduce Numbers test cases", () => {
  const notEnoughArgsError = new Error("This function needs two parameters");
  const wrongDataTypeError = new Error(
    "Names should be an array and reducer should be a number"
  );

  test("Should reduce all numbers correctly", () => {
    expect(challenge.reduceNumbers([255, 230, 30], 10)).toMatchObject([
      245, 220, 20,
    ]);
    expect(challenge.reduceNumbers([40, 30, 20], 50)).toMatchObject([0, 0, 0]);
    expect(challenge.reduceNumbers([300, 310, 320], 40)).toMatchObject([
      255, 255, 255,
    ]);
  });

  it("should throw an error when less than 2 arguments are passed", () => {
    expect(() => {
      challenge.reduceNumbers(2);
    }).toThrow(notEnoughArgsError);
    expect(() => {
      challenge.reduceNumbers();
    }).toThrow(notEnoughArgsError);
    expect(() => {
      challenge.reduceNumbers("hello");
    }).toThrow(notEnoughArgsError);
  });

  //   it("should throw an error the arguments are not an array and number respectively", () => {
  //     expect(() => {
  //       challenge.reduceNumbers("1", []);
  //     }).toThrow(wrongDataTypeError);
  //     expect(() => {
  //       challenge.reduceNumbers(2, 6);
  //     }).toThrow(wrongDataTypeError);

  //     expect(() => {
  //       challenge.reduceNumbers(2, [1, 2, 3]);
  //     }).toThrow(wrongDataTypeError);
  //   });
});
