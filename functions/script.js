// What are functions?
// Blocks of code that perform a certain task
// We use them to avoid repetition of code

const student = "Jack";
const student2 = "Kate";
const student3 = "Jenny";

console.log("Hi, my name is " + student);
console.log("Hi, my name is " + student2);
console.log("Hi, my name is " + student3);

function introduceYourself(firstName) {
    // function body
    // this is the code that will run every time I call this function
    const introduction = `Hi, my name is ${firstName}`;
    return introduction;
}

console.log(introduceYourself("Martyna"));
const intro = introduceYourself(student);
console.log(intro);

// rectangle perim

function rectanglePerim(height, width) {
    return (height + width) * 2;
}
console.log(rectanglePerim(10, 12));
const a = 34;
const b = 19;
console.log(rectanglePerim(a, b));

function getFullName(firstName, lastName) {
    console.log("Hi");
    return `${firstName} ${lastName}`;
}

console.log(getFullName("Martyna", "Krol"));
console.log(getFullName("krol", "martyna"));

// parameters are great because they are what makes functions reusable

// function with no parameters

function getCurrentDate() {
    return new Date();
}
console.log(getCurrentDate());
let x = false;
let num = 1;

printSomething();
function printSomething() {
    console.log("something");
    if (num > 0) {
        x = true;
    }
}
// const fromSomething = printSomething();
// console.log(fromSomething);

// arrow function

//console.log(sum(2, 3));
const sum = (num1, num2) => {
    return num1 + num2;
    // return means we stop the execution of that function, this log will never happen
    console.log("hello");
};

console.log(sum(1, 1));

const calculator = (num1, num2, op) => {
    switch (op) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "error";
    }
};

console.log(calculator(2, 2, "+"));
console.log(calculator(12, 2, "/"));

// Pure functions - homework




function moonOrbits(numOfEarthDays) {
    let orbits = numOfEarthDays / 27; 
    orbits = orbits.toFixed(3);
    return (orbits);

}

console.log(moonOrbits(365));
console.log(moonOrbits(54));

function circleArea(radius){
    let area = Math.PI * (radius ** 2);

    return area.toFixed(4);
}

console.log(circleArea(10));


function circlePerimeter(radius){
    let perimeter = 2 * Math.PI * radius
    return perimeter.toFixed(4);

}

console.log(circlePerimeter(10));
// ## Challenge: Years to Days & Seconds

// ### MVP

// 1. Create a function that takes your age in years and returns your age in days.
// 1. Create a function that takes your age in years and returns your age in seconds.

// ```js
// ageInDays(32) => 11680
// ageInSeconds(32) => 1009152000
// ```


function ageInDays(age) {

    return age * 365 ; 

    
}


function ageInSeconds(age) {

    return age * 86400 * 365;
}

console.log(ageInDays(32)); //=> 11680
console.log(ageInSeconds(32));// => 1009152000


// ## Challenge: Return the Remainder from Two Numbers

// ### MVP

// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

// ```js
// remainder(1, 3) ➞ 1

// remainder(3, 4) ➞ 3

// remainder(-9, 45) ➞ -9

// remainder(5, 5) ➞ 0
// ```



function remainder(x , y) {

    return x % y ; 
}

console.log(remainder(1,3));
console.log(remainder(-9, 45));

// ## Challenge: Basketball Points

// ### MVP

// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

function countingPoints(twoPointers, threePointers) {

    return 2 * twoPointers + 3 * threePointers;
}


console.log(countingPoints(10,9));
console.log(countingPoints(83,34));

// ## Challenge: Less Than 100?



// ### MVP

// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

// ```js
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37

// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117

// lessThan100(3, 77) ➞ true
// ```



function lessThan100(x, y) {

    if ( x + y < 100 ) {

        return true;
    } else {

        return false;
    }
}


console.log(lessThan100(22,15));
console.log(lessThan100(83,34));