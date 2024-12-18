//1.
console.log("hello");

const user = "remi";
const userSessionRecentHistory = ["home", "settings", "home", "about"];

const combine = (username, history) => {
  return {
    username,
    history,
  };
};

const userHistory = combine(user, userSessionRecentHistory);

console.log(typeof userHistory);

const myFunction = (arr) => {
  return arr.reduce((acc, value) => {
    return value ? ++acc : acc;
  }, 0);
};

let arr = [1, 1, 1, 4];

console.log(myFunction(arr));

// console.log(1 ? ++0: 1);

const myFunc = (arr) => {
  let count = 0;
  console.log(count);
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (current === arr[i + 1]) {
      ++count;
    } else {
      count;
    }
  }
  return count;
};
console.log(myFunc(arr));

const myFun = (arr) => {
  return arr.reduce((acc, value) => {
    if (value === acc + 1) {
      acc += 1;
      return acc;
    }
    return acc;
  }, 0);
};

let arr21 = [1, 1, 0, 4];

console.log(myFun(arr21));

const coach = {};
coach.name = "Remi";
coach.age = 23;
coach.name = "Calum";
coach.age += 7;

console.log(coach);

const input = {
  cat: "fish",
  dog: "beef",
  mouse: "cheese",
};

const output2 = {
  fish: "cat",
  beef: "dog",
  cheese: "mouse",
};

console.log(input);

console.log(typeof input);

console.log(Object.entries(input));

//get the key-value pair entries of the input
let inputArr = Object.entries(input);
console.log(typeof inputArr);
//use map to map values into keys and keys into values
const output = inputArr.map(([key, value]) => [value, key]);
//then conver array back to Object
console.log(Object.fromEntries(output));

const input1 = {
  cat: "fish",
  dog: "beef",
  mouse: "cheese",
};

console.log(Object.keys(input1));

//get the keys of input
let inputArr1 = Object.keys(input1);
//use the map function to map each key and turn it to upper case
const output3 = inputArr1.map((key) => key.toUpperCase());
console.log(output3);

const getBreeds = async () => {
  const response = await fetch("https://catfact.ninja/breeds");
  return await response.json();
};
console.log(getBreeds());

const suits = ["spade", "heart", "diamond", "club"];

const drawCards = (n = 10) => {
  const cards = [];
  console.log(n);
  while (cards.length < n) {
    console.log(n);
    let card = Math.floor(Math.random() * 13) + 1;
    card += suits[Math.floor(Math.random() * 4)];
    if (cards.includes(card)) continue;
    cards.push(card);
  }

  return cards;
};

console.log(drawCards(5));
// console.log(drawCards(55));
console.log(drawCards(21));

const generateRandomNumber = (number) => {
  return Math.floor(Math.random() * number) + 1;
};

console.log(generateRandomNumber(12));
