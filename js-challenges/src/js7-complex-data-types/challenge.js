/* This challenge build upon previous knowledge and introduces the concept of complex data types (arrays of objects) */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/* Foundation Challenges */

/**
 * A function which takes an array of employee objects and returns just an array of their quotes so we can later put
 * them on the website.
 *
 * @param {{name: string, quote: string, yearsEmployed: number, isManagement: boolean}[]} employeeArr - An array of employee objects
 * @returns {string[]} A list of the employees quotes for the website
 */
export const getEmployeeQuotes = (employeeArr) => {
  // Write code here
  const quotes = employeeArr.map((employee) => {
    return employee.quote;
  });
  return quotes;
};

/**
 * A function which takes an array of employee objects and returns a new array only containing employees that are managers.
 *
 * @param {{name: string, quote: string, yearsEmployed: number, isManagement: boolean}[]} employeeArr - An array of employee objects
 * @returns {{name: string, quote: string, yearsEmployed: number, isManagement: boolean}[]} An array containing only managers
 */
export const getTheManagers = (employeeArr) => {
  let managers = employeeArr.filter((n) => {
    if (n.isManagement) {
      return n;
    }
  });

  managers = managers.map((n) => {
    return n;
  });
  return managers;
};

/**
 * A function which tells you the number of keys on the provided object.
 *
 * @param {object} object - The provided object with an assortment of keys
 * @returns {number} The number ofcd the keys on the object
 */
export const getNumberOfKeys = (object) => {
  return Object.keys(object).length;
  // Write code here
};

/* Intermediate Challenges */

/**
 * A function to find the most expensive item in the basket and returns it in order to offer this customer a discount
 * later on down the line.
 *
 * @param {{name: string, price: number, hasFreeShipping: boolean, quantity: number}[]} shoppingBasketArr - An array of basket items for an online shop
 * @returns {{name: string, price: number, hasFreeShipping: boolean, quantity: number}} The most expensive item in the shopping basket
 */
//used ternary operator to compare prices
export const findMostExpensiveItem = (shoppingBasketArr) => {
  const mostExpensiveItem = shoppingBasketArr.reduce((acc, curr) =>
    acc.price > curr.price ? acc : curr
  );
  return mostExpensiveItem;
};
/**
 * A function which add a new key of totalPrice to each shopping basket item in the array where total cost is
 * the price * the quantity of items ordered i.e.
 * {
 *  name: "jeans",
 *  price: 30,
 *  hasFreeShipping: false,
 *  quantity: 2,
 *  totalPrice: 60
 * }
 * Then returns a new array of objects
 *
 * @param {{name: string, price: number, hasFreeShipping: boolean, quantity: number}[]} shoppingBasketArr - An array of basket items for an online shop
 * @returns {{name: string, price: number, hasFreeShipping: boolean, quantity: number, totalPrice: number}[]} A new array where each object has had a total price added to it
 */
export const settotalPrice = (shoppingBasketArr) => {
  const shopping = JSON.parse(JSON.stringify(shoppingBasketArr));
  const totalPrice = shopping.map((item) => {
    item.totalPrice = item.price * item.quantity;
    return item;
  });
  return totalPrice;
};

/**
 * A function which sums the total cost of every item in the array and returns it as a single number.
 *
 * @param {{name: string, price: number, hasFreeShipping: boolean, quantity: number, totalPrice: number}[]} shoppingBasketArr - An array of basket items for an online shop
 * @returns {number} The total cost of the order
 */
export const totalShoppingBasket = (shoppingBasketArr) => {
  // Write code here

  const sumOfItems = shoppingBasketArr.reduce((acc, curr) => {
    return acc + curr.totalPrice;
  }, 0);
  return sumOfItems;
};

/* Advanced Challenges */

/**
 * A function which takes an array of meal objects, removes unneeded keys from the objects and returns a new array of
 * meal objects.
 *
 * @param {{id: number, name: string, ingredients: string[], country: string, timeStamp: number, userCreated: string}[]} mealsArr - An array containing meal objects
 * @returns {{id: number, name: string, ingredients: string[], country: string}[]} An array of cleaned meal objects
 */
export const getImportantKeys = (mealsArr) => {
  // Write code here
  const meals = JSON.parse(JSON.stringify(mealsArr));
  const deleteUnwantedKeys = meals.map((n) => {
    delete n.timeStamp;
    delete n.userCreated;
    return n;
  });
  return deleteUnwantedKeys;
};

/**
 * A function which takes an array of meal objects and check if every object contains the necessary keys. If a key is
 * missing it adds a default value instead.
 * default values:
 * isVegetarian = false
 * timeToCook = 15
 *
 * @param {{id: number, name: string, ingredients: string[], country: string, isVegetarian?: boolean, timeToCook?: number}[]} mealsArr - An array containing meal objects
 * @returns {{id: number, name: string, ingredients: string[], country: string, isVegetarian: boolean, timeToCook: number}[]}
 */
export const setImportantKeys = (mealsArr) => {
  // Write code here
  const meals = JSON.parse(JSON.stringify(mealsArr));

  const addKeys = meals.map((n) => {
    if (!("isVegetarian" in n)) {
      n.isVegetarian = false;
    }
    if (!("timeToCook" in n)) {
      n.timeToCook = 15;
    }
    return n;
  });

  return addKeys;
};

/* Expert Challenge */

/**
 * A function that takes a raw response from a cocktail API and turn each object in the response into a cleaner form
 * so that it is easier to work with.
 *
 * @param {{
 *  idDrink: number,
 *  strDrink: string,
 *  strCategory: string,
 *  strAlcoholic: string,
 *  strInstructions: string,
 *  strIngredient1: string | null,
 *  strIngredient2: string | null,
 *  strIngredient3: string | null,
 *  strIngredient4: string | null,
 *  strIngredient5: string | null,
 *  strIngredient6: string | null
 * }[]} cocktailData - The raw response from the cocktail API
 * @returns {{
 *  id: number,
 *  drink: string,
 *  category: string,
 *  alcoholic: string,
 *  instructions: string,
 *  ingredients: string[],
 * }[]} A Cleaned array of cocktail data
 */
export const cleanCocktailResponseData = (cocktailData) => {
  const cocktails = JSON.parse(JSON.stringify(cocktailData));

  let cocktail = cocktails.map((c) => {
    c.id = c.idDrink;
    c.drink = c.strDrink;
    c.category = c.strCategory;
    c.alcoholic = c.strAlcoholic;
    c.instructions = c.strInstructions;
    c.ingredients = [
      c.strIngredient1,
      c.strIngredient2,
      c.strIngredient3,
      // c.strIngredient4,
      // c.strIngredient5,
      // c.strIngredient6,
    ];
    delete c.idDrink;
    delete c.strDrink;
    delete c.strCategory;
    delete c.strAlcoholic;
    delete c.strInstructions;
    delete c.strIngredient1;
    delete c.strIngredient2;
    delete c.strIngredient3;
    delete c.strIngredient4;
    delete c.strIngredient5;
    delete c.strIngredient6;

    let ing = c.ingredients;
    const ings = ing.forEach((element) => {
      if (element === null) {
        ing.pop(element);
      }
      return ing;
    });
    return c;
  });
  return cocktail;
};
