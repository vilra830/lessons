const source = "Convert to snakecase".split("");

const str = source.map((n) => {
  if (n === " ") {
    return "_";
  }

  return n.toLowerCase();
});

console.log(str);

let stri = "";

for (let i = 0; i < 10; i++) {
  stri += i;
}

console.log(stri);

const myArray = [];
let i = 0;
while (i++ < 10) {
  console.log(i);
  if (i < 10) myArray.push(i ** i);
  else break;
}

console.log(myArray);

const myString = "Hello";
let newString = "";

for (let i = myString.length - 1; i >= 0; i--) {
  newString += myString[i];
}

console.log(newString);

// function myFunction(score) {
//     return score > 2 ? alert('Score is greater than 2') : score > 2;
// }

// console.log(myFunction(6));

const stringManipulation = (text, toReplace, toReplaceWith) => {
  return text.replaceAll(toReplace, toReplaceWith);
};

console.log(stringManipulation("hello", "hi", "oh my"));
console.log(stringManipulation("ra", "o", "oh my"));

const myFunction = (listOfNumber) => {
  const myList = [];
  for (let i = 0; i < listOfNumber.length; i++) {
    if (!(listOfNumber[i] % 3)) myList.push(listOfNumber[i]);
  }

  return myList;
};

let arrayN = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(myFunction(arrayN));

const myFunc = arrayN.reduce((acc, curr) => {
  if (!(curr % 3)) acc.push(curr);
  return acc;
}, []);

console.log(myFunc);

const myfunction = (...values) => {
  return [...values].reduce((acc, value) => {
    return (acc += value);
  }, 0);
};

console.log(myfunction());

console.log(2 % 3);

console.log(3 && "Calum" && ("" || 26));
console.log((832783 != "89278" + 3) == 0);
console.log(true * false && false + true);
console.log(10 && 123 && -1 && 3);
