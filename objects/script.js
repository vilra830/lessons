// What is an object
// why do we need them?

// another data type is js
// instead of individual values we store key value pairs

// I want some info about nology employees

// ["firstName: Martyna", "Krol", 29, "Melbourne", "Coach", "Victoria"]
// const firstName = "SOme name";
// const lastName = "Some last name";
const me = {
  // key: value
  firstName: "Martyna",
  lastName: "Krol",
  age: 29,
  isEmployed: true,

  //  methods
  returnFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(me.entries);
console.log(me.keys);
console.log(Object.entries(me));

// dot notation

// input.value

// what is the first name of me
console.log(me.firstName);
console.log(me.lastName);
console.log(me.returnFullName());

const anotherEmployee = {
  // key: value
  firstName: "Val",
  lastName: "Kau",
  age: 28,
  isEmployed: true,

  //  methods
  returnFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function Employee(firstName, lastName, age, isEmployed) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isEmployed = isEmployed;
  // this.location = location;
}

const oneMoreEmployee = new Employee("Alex", "B", 36, true);

console.log(oneMoreEmployee);
console.log(oneMoreEmployee.firstName);
console.log(oneMoreEmployee.lastName);
console.log(oneMoreEmployee.age);
console.log(oneMoreEmployee.isEmployed);

// what happens if I try and access a property that does not exist on that object
console.log(oneMoreEmployee.location);

// adding more properties to an object

oneMoreEmployee.location = "Adelaide";
oneMoreEmployee.location = "Sydney";
console.log(oneMoreEmployee.location);
console.log(oneMoreEmployee);
console.log(me.location);

/// create a function that takes in an object and a name of  a key and returns the value of that key

const greet = (obj, key) => {
  return obj[key];
};

console.log(greet(me, "firstName"));

// array of objects
let entries = Object.entries(me);
// console.log(arr);
// console.log("Before Swapping: ", arr);
// swapping values using map()
const swappedEntries = entries.map(([key, value]) => [value, key]);

return Object.fromEntries(swapped)
// output array
console.log("After Swapping: ", arr);

// const translate = arr.map((obj) => {

//     obj.key : obj.value;
//     obj.value : obj.key;
// });
