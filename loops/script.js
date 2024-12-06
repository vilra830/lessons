// What are loops/ why do we need them?

// We want to run code multiple times

console.log("hi");
console.log("hi");
console.log("hi");
console.log("hi");
console.log("hi");

// instead I could use a loop
console.log("before loop");

// for loop

for (let i = 1; i <= 300; i++) {
  console.log("hi");
}

console.log("after loop");

// count from 1 to 25
for (let i = 1; i <= 45; i++) {
  console.log(i);
}

// I have a variable called i that keeps track of how many times my loop runs
// I have a condition - the loop runs only if the condition is true
// i++ - it's a counter, we need to update it after every iteration of the loop

// 1
// i is 1
// condition is 1 <= 45 - true
// the loop runs -> console.log(1)
// we increment i by 1

// 2
// i is 2
// condition is 2 <= 45 - true
// the loop runs => console.log(2)
// increment i by 1

// 3
// i is 3
// codition is 3 <= 45 - true
// the loop runs -> console.log(3)
// increment i by 1

// ...

// i is 45
// condition  - is 45 <= 45 - true
// the loop runs -> console.log(45)
// increment i by 1

// i is 46
// condition 46 <= 45 - false
// the loop no longer runs

for (let i = 2; i <= 10; i += 2) {
  console.log(`I is ${i}`);
}

// Create a function with a for loop that will add all the numbers up to n

// You should create a variable to set the upper limit of your loop
// Your loop should increment by 1 on each iteration
// Your loop should print the final result

// ```js
// sum(10) => 55

function sumOfaNumber(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i; // sum = sum + i;
  }
  return sum;
}
console.log(sumOfaNumber(10));

const names = ["Jake", "John", "Jane"];

for (let i = 0; i < names.length; i++) {
  console.log(`Hello, my name is ${names[i]}`);
}

for (let i = 0; i < names.length; i++) {
  console.log(names[i].toUpperCase());
}

const chars = ["f", "r", "i", "d", "a", "y"];
let myString = "";
for (let i = 0; i < chars.length; i++) {
  myString += chars[i];
}

console.log(myString);

const charac = ["f", "r", "i", "d", "a", "y"];
let word = "";
for (let i = 0; i < charac.length; i++) {
  if (i === 0) word += charac[i].toUpperCase();
  else word += chars[i];
}

console.log(word);

let reversed = "";
for (let i = charac.length - 1; i >= 0; i--) {
  console.log(i, "i");
  console.log(chars[i]);
  reversed += chars[i];
}

console.log(reversed);

// ## Challenge: Sum of n

// ### MVP:

// Create a function with a for loop that will add all the numbers up to n

// You should create a variable to set the upper limit of your loop
// Your loop should increment by 1 on each iteration
// Your loop should print the final result

// ```js
// sum(10) => 55
// ```

// ## Challenge: Write a shopping list

// ### MVP:

// Create a function with a for loop that will add numbers to your shopping list

// 1. Store the following array in a variable
// 2. Your loop should iterate through every value in the array
// 3. Your loop should print a shopping list with the number and the name of the item

// ```js
// ['milk', 'watermelon', 'eggs', 'soap', 'butter', 'apples', 'ice-cream'];
// =>
// // In Console
// 1. milk
// 2. watermelon
// 3. eggs
// 4. soap
// 5. butter
// 6. apples
// 7. ice-cream
// ```;
const groceryList = (groceryArr) => {
  for (let i = 0; i < groceryArr.length; i++) {
    // newList.push(`${i + 1}. ${itemList[i]}`);
    console.log(`${i + 1}. ${groceryArr[i]}`);
  }

  // return newList;
};

let grocery = [
  "milk",
  "watermelon",
  "eggs",
  "soap",
  "butter",
  "apples",
  "ice-cream",
];

console.log(groceryList(grocery));

// ## Challenge: Capitalizing Odd Positioned Letters

// ### MVP

// - Create a variable with a string of your choice
// - Loop through the letters in this string and build a new string
// - If the current index is odd, capitalize the letter before adding it to the new string
//   `hElLo`

//let str = 'alligator';
let newStr = "";

const newString = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (i % 2 !== 0) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i];
    }
  }

  return newStr;
};

console.log(newString("final"));

// ### Bonus

// - If the current index is even increment the letter
//   - E.g: `a becomes b`, `d becomes e`, `t becomes u`
//   - Final: `z becomes a`

const incrementLetter = (str) => {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      let n = str.charCodeAt(i) + 1;
      newStr += String.fromCharCode(n);
    } else {
      newStr += str[i];
    }
  }

  return newStr;
};

console.log(incrementLetter("zzba"));

// ## Challenge: Removing Vowels

// ### MVP

// - Create a variable with a string of your choice
// - Loop through the letters in this and build a new string
// - The new strings should be the same as the input with the vowels missing
// - E.g: `calum => clm`, `rachel => rchl`, `martyna => mrtyn`

const removingVowel = (str) => {
  let newStr = "";
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      newStr += str[i];
    }
  }

  return newStr;
};

console.log(incrementLetter("aaaa"));
console.log(removingVowel("hellpo"));
//INCLUDE FUNCTION CHECKS IF A CERTAIN ITEM IS INSIDE THE ARRAY
// ### Bonus

// - Keep vowels in the new strings if they are succeeded by the letters `l`, `m`,
//   or `r`
// - E.g: `calum => calum`, `rachel => rchel`, `martyna => martyn`

const keepVowels = (str) => {
  let newStr = "";
  let vowels = ["a", "e", "i", "o", "u"];
  let specialChar = ["l", "m", "r"];

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i]) && specialChar.includes(str[i + 1])) {
      newStr += str[i];
    }
  }

  return newStr;
};

console.log(removingVowel("rachel"));


