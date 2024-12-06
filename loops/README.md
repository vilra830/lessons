## Challenge: Sum of n

### MVP:

Create a function with a for loop that will add all the numbers up to n

You should create a variable to set the upper limit of your loop
Your loop should increment by 1 on each iteration
Your loop should print the final result

```js
sum(10) => 55
```

## Challenge: Write a shopping list

### MVP:

Create a function with a for loop that will add numbers to your shopping list

1. Store the following array in a variable
2. Your loop should iterate through every value in the array
3. Your loop should print a shopping list with the number and the name of the item

```js
['milk', 'watermelon', 'eggs', 'soap', 'butter', 'apples', 'ice-cream'];
=>
// In Console
1. milk
2. watermelon
3. eggs
4. soap
5. butter
6. apples
7. ice-cream
```

## Challenge: Capitalizing Odd Positioned Letters

### MVP

- Create a variable with a string of your choice
- Loop through the letters in this string and build a new string
- If the current index is odd, capitalize the letter before adding it to the new string
  `hElLo`

### Bonus

- If the current index is even increment the letter
  - E.g: `a becomes b`, `d becomes e`, `t becomes u`
  - Final: `z becomes a`

## Challenge: Removing Vowels

### MVP

- Create a variable with a string of your choice
- Loop through the letters in this and build a new string
- The new strings should be the same as the input with the vowels missing
- E.g: `calum => clm`, `rachel => rchl`, `martyna => mrtyn`

### Bonus

- Keep vowels in the new strings if they are succeeded by the letters `l`, `m`,
  or `r`
- E.g: `calum => calum`, `rachel => rchel`, `martyna => martyn`

### MVP

Create a function that returns a list of random unique whole numbers given a range

- Create a function called `generateNumbers`
- This function should take in 2 numbers
  - `n` being the number of numbers to be generated
  - `r` being the max range
  - E.g: `n: 10, r: 20:` function will generate 10 random numbers between 0
    and 20
- Function should return `n` numbers in range `0 <= n < r`
