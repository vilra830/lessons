//while loops just like any other loops -  we want to do something multiple times

// when to use ?  sometimes we dont know how many times we want out loop to run

// let i = 1;

// while (i < 6) {}

// ### MVP

// Create a function that returns a list of random unique whole numbers given a range

// -   Create a function called `generateNumbers`
// -   This function should take in 2 numbers
//     -   `n` being the number of numbers to be generated
//     -   `r` being the max range
//     -   E.g: `n: 10, r: 20:` function will generate 10 random numbers between 0
//         and 20
// -   Function should return `n` numbers in range `0 <= n < r`
console.log("hello");
const generateNumbers = (n, r) => {
  //    let randomN = Math.floor(Math.random()*n) +1 ;
  let randomNum = Math.floor(Math.random() * r) + 1;
  let numbers = new Set();

  while (numbers.size <= n) {
    if (0 <= n && n < r) {
      return n;
    }
    randomNum = Math.floor(Math.random() * r) + 1;
  }
};

console.log(generateNumbers(2, 5));
