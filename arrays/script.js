// what are arrays?
// why do we need them?

// we want to store more than one value in a variable
// arrays are basically lists of data
// a way to store related values under a single variable

const nologyStudent = "Kate";
const nologyStudent2 = "Jack";
const nologyStudent3 = "Jane";

console.log(nologyStudent);
console.log(nologyStudent2);
console.log(nologyStudent3);

const allStudents = [nologyStudent, nologyStudent2, nologyStudent3];
console.log(allStudents);

// I could have different data types in one array but it is not a good idea

// There will still be situations where I want to access individual values from an array

// each element in an array is located at a certain position - it has an index

// INDEXES START AT 0!
console.log(allStudents[0]);
console.log(allStudents[1]);
console.log(allStudents[2]);

// what if I put a too large index?
console.log(allStudents[3]);

// each array has a length property that tells me exactly how many elements are on that array
console.log(allStudents.length);

// if I want to access the last element of an array
console.log(allStudents[allStudents.length - 1]);

const numbers = [];
// We can assing values with indexes like below, but it comes with risks:
// - we can accidentally create empty spots
// - we can loose some data
numbers[0] = 23;
numbers[1] = 56;
numbers[0] = 9;
numbers[5] = 67;
console.log(numbers.length);
console.log(numbers);

// There are some predefined methods available in js that allow us to update arrays

// Add an element to the end of an array - arr.push
// Add an element to the start of an array - arr.unshfit
// Remove an element from the start - arr.shift
// Remove an element from the end of an array - arr.pop

const letters = [];
console.log(letters);

letters.push("a");
console.log(letters);
letters.push("b");
letters.push("c");
letters.push("d");
console.log(letters);

letters.unshift("z");
console.log(letters);

letters.unshift("W");
console.log(letters);

const someNumbers = [1, 2, 3, 4, 5];
console.log(someNumbers);
const lastNum = someNumbers.pop();
console.log(lastNum);
const y = someNumbers.pop();
console.log(y);
console.log(someNumbers);

const someLetters = ["a", "b", "c"];
console.log(someLetters);
const firstLetter = someLetters.shift();
console.log(someLetters);
console.log(firstLetter);

// impure
const someFunc = (arr) => {
  arr.push("f");
  return arr;
};

// const arr = someFunc(someLetters);
// console.log(someLetters);
// console.log(arr);

// pure
const someFuncPure = (arr) => {
  const newArr = [...arr, "g"];
  newArr.push("f");
  return newArr;
};
const arr2 = someFuncPure(someLetters);
console.log(someLetters);
console.log(arr2);

// other ways to create a new array

// an array thats 150 long and is filled with 1s
const longArr = new Array(150).fill(1);
console.log(longArr);

const anotherArr = new Array(1, 2, 3);
console.log(anotherArr);

// ## Challenge: Listing Hobbies

// ### MVP

// 1. Create an array with 3 of your hobbies
// 1. Print in the console the first hobby in the array
// 1. Remove that first hobby from the array and store that hobby in a variable
// 1. Store the length of the array in a variable
// 1. Add another hobby at the end of the array
// 1. Print that last hobby in the console

const hobbiesArr = new Array("reading", "singing", "cooking");
console.log(hobbiesArr);

const firstHobby = hobbiesArr.shift();
console.log(firstHobby);

let arrLen = hobbiesArr.length;
console.log(arrLen);

hobbiesArr.push("swimming");

arrLen = hobbiesArr.length;
console.log(hobbiesArr[arrLen - 1]);

// Bonus:

// 1. Join all your hobbies in a single string each hobby being comma separated
//    (i.e. "My hobbies are: hobby1, hobby2, hobby2")

let arrayString = hobbiesArr.join(",");
console.log(`My hobbies are: ${arrayString}`);

// ## Challenge: Grocery Lists

// ### MVP

// 1. Create an array containing 5 grocery items you often buy
// 2. Log this list to the console, make sure the output is pipe delimited

let arrayGrocery = new Array("apple", "pear", "papaya", "mango", "almonds");
let groceryString = arrayGrocery.join("|");
console.log(groceryString);

// ```js
// ['apple', 'pear', 'papaya', 'mango'] => 'apple|pear|papaya|mango'
// ```
