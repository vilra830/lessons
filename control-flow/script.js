// Control Flow

// if else

// if (some condition === true) {
// this code will run
//} else (if it's not true){
// this code will run
//}

let passwordFromLoginForm = "MyPass";
const savedPassword = "MyPass";

if (passwordFromLoginForm === savedPassword) {
    console.log("Welcome");
} else {
    console.log("Incorrect password");
}

// Recipes website

let keyword = "apple";
keyword = "cucumber";

if (keyword === "apple") {
    console.log("Apple pie");
} else if (keyword === "banana") {
    console.log("Banana bread");
} else if (keyword === "tomato") {
    console.log("Tomato soup");
} else {
    console.log("Sorry no recipes for that ingredient");
}

let score = 91;

// if (score >= 80 && score < 90) {
//     console.log("B");
// } else if (score >= 90) {
//     console.log("A");
// } else if (score >= 70) {
//     console.log("C");
// } else {
//     console.log("You failed");
// }

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else {
    console.log("You failed");
}

// If you don't chain your conditions in one block, all of the true ones will run
// if (score >= 90) {
//     console.log("A");
// }

// if (score >= 80) {
//     console.log("B");
// }

// if (score >= 70) {
//     console.log("C");
// }
console.log("run the rest of the code");






let n = 2;

if (n % 2 === 0) {

    console.log(`${n} is a even`);
}

else {

    console.log(`${n} is a odd`);
}

/**### MVP:

Check for the smallest value

1. Create two variables `x` & `y`
1. Write an if / else block
1. It should compare a number `x` to another number `y`
1. It should print ("`x` is greater than `y`") in the console
1. Or "`x` is smaller than `y`"
1. Or "`x` is equal to `y`"
1. Depending on the value of `x` and `y`**/

let x ,  y;

x = 10 ; 
y = 12 ; 

if( x  > y) {

    console.log(`${x} is greater than ${y}`);
} else if (x < y) {

    console.log(`${x} is smaller than ${y}`);
} else {

    console.log(`${x} is equal to ${y}`);

}

/**## Challenge: User Input Type

### MVP:

Console log the user's input depending on the data type

1. Create a variable `userInput`
1. Write an if / else block
1. If the input is a number, it should console log that number but squared
1. If the input is a string, it should console log that input
1. If the input is anything else, the console should say "invalid input" **/




let userInput = true;

if  (typeof(userInput) === 'number') {

    console.log(userInput**2);

} else if (typeof(userInput) === 'string'){

    console.log(userInput);

} else {

    console.log('invalid input');
}


//SWITCH 


let day = 0;
let modDay = day % 7;
switch (modDay) {
    case 1:
        console.log('Today is Monday');
        break;
    case 2:
        console.log('Today is Tuesday');
        break;
    case 3:
        console.log('Today is Wednesday');
        break;
    case 4:
        console.log('Today is Thursday');
        break;
    case 5:
        console.log('Today is Friday');
        break;
        case 6:
    console.log('Today is Saturday');
     break;
     case 0:
    console.log('Today is Sunday');
        break;    

    default:
        console.log("not applicable");
}

/**  Solution 1
let parent1 = 'green';
let parent2 = 'green';

let brown;
let blue;
let green;

if (parent1 === 'brown' && parent2 === 'brown') {
  brown = '75';
  blue = '6.25';
  green = '18.75';
} else if (
  (parent1 === 'green' && parent2 === 'brown') ||
  (parent1 === 'brown' && parent2 === 'green')
) {
  brown = '50';
  blue = '12.5';
  green = '37.5';
} else if (
  (parent1 === 'blue' && parent2 === 'brown') ||
  (parent1 === 'brown' && parent2 === 'blue')
) {
  brown = '50';
  blue = '50';
  green = '0';
} else if (parent1 === 'green' && parent2 === 'green') {
  brown = '<1';
  blue = '25';
  green = '75';
} else if (
  (parent1 === 'green' && parent2 === 'blue') ||
  (parent1 === 'blue' && parent2 === 'green')
) {
  brown = '0';
  blue = '50';
  green = '50';
} else if (parent1 === 'blue' && parent2 === 'blue') {
  brown = '0';
  blue = '99';
  green = '<1';
}

console.log(
    `Your eye colors are ${parent1} and ${parent2}, the chancers of your child having blue eyes is ${blue}%, brown is ${brown}%, and green is ${green}%`
  );
  */

let parent1 = 'brown';
let parent2 = 'green';

switch (true) {
    case parent1 === 'brown' && parent2 === 'brown' : 
    brown = '75';
    blue = '6.25';
    green = '18.75';
    break;

    case parent1 === 'green' && parent2 === 'brown':
    case parent1 === 'brown' && parent2 === 'green':
        brown = '50';
        blue = '12.5';
        green = '37.5';
    break;
    case parent1 === 'blue' && parent2 === 'brown':
    case parent1 === 'brown' && parent2 === 'blue':
        brown = '50';
        blue = '50';
        green = '0';
    break;
    case parent1 === 'green' && parent2 === 'green':
        brown = '50';
        blue = '50';
        green = '0';
    
        break;

    case parent1 === 'green' && parent2 === 'blue':
    case parent1 === 'blue' && parent2 === 'green':
        brown = '0';
        blue = '50';
        green = '50';
    break;

    case  parent1 === 'blue' && parent2 === 'blue':
        brown = '0';
        blue = '99';
        green = '<1';

    break;
        default:
            brown = 'invalid';
            blue = 'invalid';
            green = 'invalid';

}

console.log(
    `Your eye colors are ${parent1} and ${parent2}, the chancers of your child having blue eyes is ${blue}%, brown is ${brown}%, and green is ${green}%`
  );

