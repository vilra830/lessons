// const getGrade = (score) => {
//   //   /* Write your code here */
//   //   switch (true) {
//   //     case score > 100:
//   //     case score < 0:
//   //       //case score.isNaN():
//   //       return "Score Unavailable";
//   //     case 30 <= score <= 39:
//   //       return "F";
//   //     case 40 <= score <= 49:
//   //       return "E";
//   //     case 50 <= score <= 59:
//   //       return "D";
//   //     case 60 <= score <= 69:
//   //       return "C";
//   //     case 70 <= score <= 79:
//   //       return "B";
//   //     case 80 <= score <= 100:
//   //       return "A";
//   //   }

//   if (score >= 30 && score <= 39) {
//     return "F";
//   } else if (score >= 40 && score <= 49) {
//     return "E";
//   } else if (score >= 50 && score <= 59) {
//     return "D";
//   } else if (score >= 60 && score <= 69) {
//     return "C";
//   } else if (score >= 70 && score <= 79) {
//     return "B";
//   } else if (score >= 80 && score <= 100) {
//     return "A";
//   } else {
//     return "Score unavailable";
//   }
// };
// console.log(getGrade(31));
// console.log(getGrade(39));
// console.log(getGrade(49));
// console.log(getGrade(55));
// console.log(getGrade(101));
// console.log(getGrade(80));
// console.log(getGrade("62"));

// console.log("22" !== Number);

// // console.log(moveFirstAndLastItems(itemsArr));
// // console.log(reverseArray);
// // console.log(itemsArr.length);
// // console.log(itemsArr);
// // console.log(itemsArr[1]);

// let newerArray = new Array();
// const removeEvenNumbers = (numberArr) => {
//   const newArray = [...numberArr];
//   console.log(newArray);
//   for (let i = 0; i < newArray.length; i++) {
//     if (newArray[i] % 2 !== 0) {
//       //newArray.shift();
//       newerArray.push(newArray[i]);
//     }
//   }

//   return newerArray;
// };
// //console.log(newerArray);
// const arrayNew = [1, 2, 4, 5, 5];
// let a = [...arrayNew];
// //console.log(a);
// console.log(removeEvenNumbers(arrayNew));

// let itemsArr = ["Tony", "John", "Dave"];
// console.log(itemsArr);
// let reverseArray = new Array();
// let itemLast;
// const moveFirstAndLastItems = (itemsArr) => {
//   itemLast = itemsArr.pop();
//   reverseArray.unshift(itemLast);
//   console.log(reverseArray);
//   console.log(itemsArr);
//   for (let i = 0; i < itemsArr.length; i++) {
//     reverseArray.push(itemsArr[i]);
//   }

//   return reverseArray;
// };

// console.log(moveFirstAndLastItems(itemsArr));

// // * @param {string[]} playersArr ["Tony","John","Dave"]
// // * @param {number[]} scoresArr [45,55,66]
// // * @return {string[]} ["P:1 Tony scored 45","P:2 John scored 55","P:3 Dave scored 66"]
// // */

// const generateHighscores = (playersArr, scoresArr) => {
//   let players = [...playersArr];
//   let scores = [...scoresArr];
//   let newArray = [];
//   if (
//     players.length !== scores.length ||
//     players.length === 0 ||
//     scores.length === 0
//   ) {
//     return "invalid inputs";
//   }
//   let index = 1;
//   for (let i = 0; i < players.length; i++) {
//     for (let n = 0; n < scores.length; n++) {
//       if (i === n)
//         newArray.push(`P:${index} ${players[i]} scored ${scores[n]}`);
//     }
//     index++;
//   }

//   return newArray;
// };

// let playersArr = ["Tony", "John", "Dave"];
// let scoresArr = [45, 55, 66];

// console.log(generateHighscores(playersArr, scoresArr));
// console.log("hello".length);
// console.log("hello"[0]);

// const encryptString = (toEncrypt) => {
//   let firstList = "";
//   let secondList = "";
//   let thirdList = "";
//   let encryptedWord = ``;
//   let newArray = [];
//   if (toEncrypt.length === 3) {
//     return toEncrypt;
//   } else if (toEncrypt.length === 0) {
//     return "";
//   }
//   // if (toEncrypt.length % 3 === 0) {
//   for (let i = 0; i < toEncrypt.length; i += 3) {
//     if (i < toEncrypt.length) firstList += toEncrypt[i];

//     if (i + 1 < toEncrypt.length) secondList += toEncrypt[i + 1];
//     if (i + 2 < toEncrypt.length) thirdList += toEncrypt[i + 2];
//   }

//   encryptedWord = `${firstList}${secondList}${thirdList}`;
//   return encryptedWord;
// };

// console.log(encryptString("keep it secret"));

// console.log(reverseString(toReverse));
// const doubleNums = [];

// const doubleNums2 = nums2.map(doubleNum);
// console.log(doubleNums2);

const messyStrArr = ["   hello  ", "   banana", "    nology    "];

const cleanArr = messyStrArr.map((b, index, arr) => {
  console.log(b.trim());
  console.log(index, "index");
  console.log(arr, "the array we are mapping");
  return b.trim();
});

console.log(cleanArr);

const nums2 = [2, 3, 4, 5, 6, 56];
console.log(nums2);
const evenNum = nums2.map((n) => {
  if (n % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
  return evenNum;
});

console.log(evenNum);

// // * @param {string} toReverse "reverse"
// // * @return {string} "esrever"
// // */

// const reverseString = (toReverse) => {
//   return toReverse.map(n);
// };

let toReverse = "reverse";
let str = toReverse.split("");
console.log(str);
const reverseString = str.map((char, b, c) => {
  console.log(char);
  console.log(b); //index
  console.log(c);
  return char;
});

console.log(reverseString);

let charcterArr = ["X", "B", "B", "b", "g", "l", "n", "x"];

console.log(charcterArr.sort());

const toSort = charcterArr.map((char) => {
  // console.log(char);
  return char.toLowerCase();
});

console.log(toSort);
charcterArr.sort();
console.log(charcterArr.sort());

function Employee(fullName) {
  this.fullName = fullName;

  // this.location = location;
}

const oneMoreEmployee = new Employee("Rhea Villafuerte");
console.log(oneMoreEmployee);

console.log(Object.values(oneMoreEmployee));
let fullName = Object.values(oneMoreEmployee);
let stri = Object.values(oneMoreEmployee).join("").split(" ");

oneMoreEmployee.firstName = stri[0];
oneMoreEmployee.LastName = stri[1];

console.log(oneMoreEmployee);

const person = {
  name: "Joe Bloggs",
  height: 170,
  eyeColour: "blue",
  likesIceCream: false,
};

console.log(Object.entries(person));
let obj = Object.keys(person);
console.log(person["name"]);
// const hello = obj.map((n) => {

//   return n[]

// *
// * @param {{fullName: string,}} customer A customer object from the database
// * @returns {{fullName: string, firstName: string, lastName: string}} A customer object from the database with the name separated into first and last
// */
const splitFullNameToFirstAndLast = (customer) => {
  /* Write code here */
};

const user1 = {
  id: 101,
  name: "Harry Potter",
  address: {
    line1: "4 Privet Drive",
    line2: "Little Whinging",
    city: "Surrey",
    postcode: "CR3 0AA",
  },
};

console.log(Object.values(user1)[2]);
let strr = Object.values(user1)[2];
console.log(Object.values(strr).join(" "));

const allergenList = [
  "celery",
  "gluten",
  "crustaceans",
  "eggs",
  "fish",
  "lupin",
  "milk",
  "molluscs",
  "mustard",
  "peanuts",
  "sesame",
  "soybeans",
  "sulphites",
  "tree nuts",
];

console.log(allergenList);

const customer1 = {
  id: 103,
  name: "Jordan Jordanson",
  allergies: [],
};

const customer2 = {
  id: 104,
  name: "Peter Peterson",
  allergies: [
    "celery",
    "gluten",
    "crustaceans",
    "eggs",
    "fish",
    "lupin",
    "milk",
    "molluscs",
    "mustard",
    "peanuts",
    "sesame",
    "soybeans",
    "sulphites",
    "tree nuts",
  ],
};
console.log(allergenList);

console.log(Object.values(customer2)[2]);
const customerAllergy = Object.values(customer2)[2];

console.log(typeof customerAllergy);
console.log(customerAllergy);
console.log(customerAllergy[0]);

function allergenlists(customer, allergenList) {
  let customerAllergy = Object.values(customer)[2];
  let allergenSafe = [];
  for (let i = 0; i < allergenList.length; i++) {
    if (!customerAllergy.includes(allergenList[i])) {
      allergenSafe.push(allergenList[i]);
    }
  }
  return allergenSafe;
}
const customer3 = {
  id: 105,
  name: "Mandy Manderson",
  allergies: [
    "eggs",
    "fish",
    "lupin",
    "molluscs",
    "mustard",
    "sesame",
    "soybeans",
    "sulphites",
  ],
};
console.log(allergenlists(customer2, allergenList));
console.log(allergenlists(customer1, allergenList));


let myValue = 30;
for (let i = 5 ; i <9; i++) {

  myValue +=2;
}

console.log(myValue);