// Reduce - the most common use case is to reduce an array to a different data type, or a single value

const numbers = [2, 3, 5, 7, 8];

// I want to add all of those numbers

let sum = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  sum += numbers[i];
}

// instead of having one extra iteration that does 0 + 2
// I can jump into adding 2 + 3 straight away
console.log(sum);

// the first iteration of this reduce - prev is 2, curr is 3
// the next iteration prev is what I return from this function and curr is the next element
const reducedSum = numbers.reduce((acc, curr) => {
  console.log(acc, curr);
  return acc + curr;
});
console.log(reducedSum);

let sum2 = 0;

for (let i = 0; i < numbers.length; i++) {
  sum2 += numbers[i];
}

const reducedSumWithDefault = numbers.reduce((acc, curr) => {
  console.log("wth default", acc, curr);
  return acc + curr;
}, 0);
// could be used as a replacement for map, or filter, or both

const letters = ["h", "e", "l", "l", "o"];

// with initial value
// I wat to turn this to a string

const word = letters.reduce((acc, curr) => {
  console.log(acc, "acc");
  console.log(curr, "curr");
  return acc + curr;
}, "Hi, hi ");

// the first iteration of this reduce
// acc -> ""
// curr -> the first el of yhe arr -> "h"

// the next iteration
// acc is whatever I return from the first iteration

// the second iteration
// acc -> "" + "h" => "h"
// curr is the next el from my arr -> 'e'

// the third iteration
// acc -> "h" + 'e" -> "he"
// curr is the el -> l
// he + l

// the iteration
// acc -> "hel"
// my curr -> the next el from my arr "l"
// hel + l

// the next
// acc -> hell
// curr -> o
// return hell + o

// there is no more elements left
// we return hello from the whole reduce
console.log(word);

const word2 = letters.reduce((acc, curr) => {
  console.log(acc, "acc");
  console.log(curr, "curr");
  const sum = acc + curr;
  return sum;
});
console.log(word2, "word2");

// reduce to an array - same what map would do

const arr = ["mon", "tues", "wednesday"];

const upperArr = arr.reduce((acc, curr) => {
  console.log(acc, curr, "like map");
  const upper = curr.toUpperCase();
  console.log(upper);
  acc.push(upper);
  return acc;
}, []);

console.log(upperArr);

// reduce as filter

const someNums = [2, 4, 5, 7, 8];

const even = someNums.reduce((acc, curr) => {
  console.log(acc, curr, "filter");
  if (curr % 2 === 0) {
    acc.push(curr);
  }
  return acc;
}, []);
console.log(even);

const names = ["Ceara", "Petr", "Murielle", "Rhea"];

// use reduce to return arr of names that are 4 letters or shorter to uppercase
// you would need both map and filter for this
// or a single reduce

const shortNames = names.reduce((acc, curr) => {
  console.log(acc, "is accumulator");
  console.log(curr, "is current");
  if (curr.length <= 4) {
    acc.push(curr.toUpperCase());
  }

  return acc;
}, []);

console.log(shortNames);

//map and filter

const uppercaseSmallNamesLong = (arr) =>
  arr.filter((n) => n.length < 5).map((n) => n.toUpperCase());

console.log(uppercaseSmallNamesLong(names));

//map and filter with consoles
