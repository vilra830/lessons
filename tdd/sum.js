export const sumOfNumbers = (...args) => {
  let sum = 0;

  for (let arg of args) {
    if (typeof arg !== "number") {
      throw new Error("All arguments must be numbers");
    }

    sum += arg;
  }

  

  return +sum.toFixed(2);
};

console.log(sumOfNumbers(1, 2));
