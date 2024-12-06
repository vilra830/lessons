//Operators

//Arithmetic Opertors

console.log(12+15);
console.log("Hello" + " everyone");
console.log(4+ 'four');
console.log('four' + 1 + 4);
console.log(true + true);
console.log(false - false);
console.log(2 ** 3);


let x = 4;

x++;
++x;
console.log(x);

// comparison operators 
// they always return a boolean

// !=  , == , > , < , >= , <= , ===

console.log(5>1);
console.log(3 === '3'); // === this checks the data type as well 
console.log(1+2 > 10); // math happens before the comparison


// logic operators 

// and or 
// && , ||

let age = 6;

// how to check if someone is 6-17 age bracket?

console.log(0 && 1);


/** ## Challenge: Working with ages

### MVP

-   Create a variable that contains your age
-   Add 10 to your age variable and log the output to the console
-   Subtract 7 from your age variable and log the output to the console
-   Multiple your age variable by 11 and log the output to the console



## Boolean expressions challenge

### MVP

Without running the code, figure out the output for each expression, including
whether the output is truthy / falsey.

Be prepared to tell us your reasoning! **/


let myAge = 37;
myAge += 10;
console.log(myAge);
myAge -= 7;
myAge *=11;
console.log(myAge);

 
2 == "2"; // true - because same value - they may not have the same data type. the operator does not check the DT
2 === 2; // true operator checks value and data type
2 === "2"; //false operator checks value and data type
"2" + 3 == 23; //true operator checks value and data type
"2" + 3 === 5; //false operator checks value and data type
10 % 3; // 1      - 3 remainder 1 -> modulus
10 % 3 === 1; // answer 1 === 1 true
(100 % 7) % 5; // remainder 2  , 2/5 is 0 remainder 2
2 % 7; // 2/7 0 remainder 2
(100 % 7) % 5 !== 0; // true  2/5 = 0 remainder 2 !== 0 -> true
(100 % 7) % 9 == 2;   //true 2/9 = 0 remainder 2 == 2 -> true 
!(10 % 2); //not 0 is true 
!!!!((10 % 7) % 3); // not 0 is true , not true is false, not false is true, not true is false
10 % 3 === -1 % 2; // 1 === -1 different values - false
(892783 != "89278" + 3) == 0; // concatenate string and int, then evaluate its false then evaluate false == 0 -> true 
true && false;  // false
false || true; // true
true || false; // true
true || false; // true
true || false + true; // 1
true * false && false + true; // 0 
10 && 123 && -1 && 3; // 3
10 && 123 && 0 && 3; // 0 
console.log(10 && 123 || "" && parseInt("Roisin") || 23 / 23 - 1); // 123 break into small expressions



3 && "Calum" && ("" || 26); // 26
3 && "Remi" && (null || 86 * 0 || ("" + 1 && "Cat" + "Dog")); //  CatDog



 console.log(typeof("")); // string - evaluated as False
 console.log(false && 0); // false && False LHS 
 console.log(false || 0); // false || False  RHS
 
 console.log(1 && 2); // True && True RHS
 console.log(3 || 4); // True || True LHS


