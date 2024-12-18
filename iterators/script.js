// What is wrong with loops

const nums = [2, 3, 4, 5, 6];
const doubledNums = [];

for (let i = 0; i < nums.length; i++) {
  const doubleNum = nums[i] * 2;
  doubledNums.push(doubleNum);
}

console.log(doubledNums);

let myValue = 30;
for (let i = 5; i < 9; i++) {
  myValue += 2;
}

console.log(myValue);
// It's a very common problem - I have an array and ned a new array based on the first one
// I needed to make sure I create an empty array to push to
// I needed to make sure I set up my loop correctly - that I get the index logic right
// I needed to wrote the entire loop syntax

// Instead of using a loop, we can use array iterators - some functions that access one element of an array at a time and give us back/return some value

// .map, .filter, .reduce, .forEach, .some, .every

// in js, there are no performance benefits of using iterators over loops

// callback functions
// since a function is just a variable, we can pass it as a param to a different function

function add(x, y) {
  console.log("executing add");
  return x + y;
}

const suits = ["spade", "heart", "diamond", "club"];

const drawCards = (n = 10) => {
  const cards = [];
  console.log(n);
  while (cards.length < n) {
    console.log(n);
    let card = Math.floor(Math.random() * 14);
    card += suits[Math.floor(Math.random() * 4)];
    if (cards.includes(card)) continue;
    cards.push(card);
  }

  return cards;
};

console.log(drawCards(5));
console.log(drawCards(55));
console.log(drawCards(21));



function subtract(a, b) {
  console.log("subtracting");
  return a - b;
}

const sources = [1, 2, 3, 4, 5];
//const destination = [];

const destination = sources.reduce((acc, curr) => {
  const current = curr + 3;
  if (current % 2 === 0) {
    acc.push(current);
  }
  return acc;
}, []);
console.log(destination);
function doMath(num1, num2, callback) {
  console.log(callback);
  return callback(num1, num2);
}

console.log(doMath(2, 2, add));
console.log(doMath(2, 2, subtract));

function doubleNum(n) {
  console.log(n, "n");
  return n * 2;
}

// I have an array, I want a new array OF THE SAME LENGTH with every element updated
// whatever function I pass to map, it will get called using my element as a param
const nums2 = [2, 3, 4, 5, 6, 56];

const doubleNums2 = nums2.map(doubleNum);
console.log(doubleNums2);

const words = ["apple", "banana", "kiwi"];
// const someFunc = (param) => {}
// a new array of words all to uppercase
const upperWords = words.map((word) => {
  console.log(word, "word");
  // the logic of what I want to do with each word
  const upper = word.toUpperCase();
  // return the new version of the word
  return upper;
  // if I don;t return I am returning undefined
});

console.log(upperWords);

// what an implementation of map could look like

const map = (arr, func) => {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    const currEl = arr[i];
    const newVal = func(currEl);
    newArray.push(newVal);
  }

  return newArray;
};

const nums3 = [1, 2, 3];
console.log(map(nums3, doubleNum));
const doubled3 = map(nums3, (n) => {
  return n * 2;
});
console.log(doubled3);

// Why should we use iterators over loops?

// less room for errors, less syntax
// dry - do not repeat yourself
// we don't need to worry about managing index

const messyStrArr = ["   hello  ", "   banana", "    nology    "];

const cleanArr = messyStrArr.map((b, index, arr) => {
  console.log(b.trim());
  console.log(index, "index");
  console.log(arr, "the array we are mapping");
  return b.trim();
});

console.log(cleanArr);

// Create an array of first names only

const fullNames = ["John Smith", "Martyna Krol", "Val Kau"];

const firstNames = fullNames.map((fullName) => {
  console.log(fullName.split(" ")[0]);
  return fullName.split(" ")[0];
});
console.log(firstNames);

// filter

// returns a new array with values that meet a certain condition

// most likely you will get a smaller array back

// sometimes arr of the same length

// gives us back a new array, does not remove anything from input array

const numbers = [3, 4, 78, 56, 34];

// I want only numbers that are greater than 10

const numsGreatThan10 = numbers.filter((n) => {
  console.log(n, "numbers filtered");

  return n > 10;
});

console.log(numsGreatThan10);

// words that are longer than 5 chars

const fruit = ["apple", "pear", "kiwi", "banana"];

const longWords = fruit.filter((fruit) => fruit.length > 5);
console.log(longWords);

// our own implementation of filter
// do not do this in your code, use the existing filter
// func needs to return a boolean
const filter = (arr, func) => {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    const currEl = arr[i];
    // this will be a bool
    const shouldStay = func(currEl);

    if (shouldStay === true) {
      newArray.push(currEl);
    }
  }
  return newArray;
};

const longWordsWithCustomFilter = filter(fruit, (n) => n.length > 5);

console.log(longWordsWithCustomFilter);

const numsToFilter = [34, 57, 87, 2, 1];

// I want an array of only even numbers

const evenNumbers = numsToFilter.filter((n) => {
  console.log(n, "numbers filtered");

  return n % 2 === 0;
});

// console.log(evenNumbers);
let numberString = "1+2+300+4+5";
// * @return {number[]} [1, 2, 3, 4, 5]
// */
console.log(numberString);
console.log(numberString.split("+"));
const convertStringToNumbersArray = (numberString) => {
  console.log(numberString);
  const numSplit = numberString.map((num) => {
    return num.split()[0];
    console.log(num);
  });

  numberString.split();

  // return;
};

const newArray = new Array(2).fill(null);
console.log(newArray);
console.log(`Aspi${newArray.pop() ?? "ra"}tions`);

const person = { name: "Allen" };
console.log(`${("" + person.age).slice(3, 6)}nance`);

const chars = [74, 97, 118, 97, 83, 99, 114, 105, 112, 116];

let i = 0;
let output = "";

while (i++ <= chars.length) {
  output += String.fromCharCode(chars[i]);
  console.log(output);
  i++;
}

const expected = "JavaScript";
console.log("Expected:", expected);
console.log("Actual", output);
console.log(expected === output);
//
// //let str = '';
// for (let i = 0; i < 10; i++) {
//  // str += i;
// }

// console.log(str);

console.log(("ba" + +"a" + "a").toLowerCase());

// console.log(source);
// let s = "";
// // for (let i = 0; i < source.length; i++) {
//   if (source[i] === " ") {
//     s += "_";
//   } else {
//     s += source[i].toLowerCase();
//   }
// }
// console.log(s);



function convertStringToNumbersArray(numberString) {
  let newString = numberString.split("");
  let newArr = [];
  for (let i = 0; i < newString.length; i++) {
    if (newString[i] !== "+") {
      newArr.push(Number(newString[i]));
    }
  }

  return newArr;
}
let numStr = "1+2+3+4+5";
console.log(convertStringToNumbersArray(numStr));

const sa = 0;
for (let i = 0; i < 10; i++) {
  console.log(sa);
  sa += i;
}
console.log(sa);

let bookArr = [
  "JavaScript: The Definitive Guide",
  "JavaScript: The Good Parts",
  "The Google story",
  "React for Dummies",
];
// console.log(bookArr.split(""));

const arr = new Array(2).fill(null);
console.log(`Aspi${arr.pop() ?? "ra"}tions`);

// return allergyList;
//let customerAllergy = Object.values(customer)[2];
//let customerAllergy = Object.values(customer)[2];
// let allergenSafe = [];
// for (let i = 0; i < allergenList.length; i++) {
//   if (!allergenList.includes(customerAllergy[i])) {
//     allergenSafe.push(allergenList[i]);
//   }
// }
let newArr = [];



const filterBooksBySearch  = (booksArr, searchTerm) => {
  return booksArr.filter((value) => value.includes(searchTerm));
  
}