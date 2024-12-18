// a way to request data and return that data
const catBreed = async (limit) => {
  const response = await fetch(`https://catfact.ninja/breeds?limit=${limit}`, {
    headers: {
      Accept: "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Cannot get data");
  }
  const data = await response.json();
  console.log(data);
  console.log(typeof data);

  // data.results looks like this [{ id: "gdjagai", joke: "Some joke"}, { id: "gddbfj", joke: "Some other joke"}]
  const resultsArr = data.data;
  if (resultsArr.length === 0) {
    throw Error(`No search results for ${limit}`);
  }

  // // const cleanedJokes = [];
  // // for (let i = 0; i < resultsArr.length; i++) {
  // //     // { id: "gdjagai", joke: "Some joke"}
  // //     console.log(resultsArr[i]);
  // //     cleanedJokes.push(resultsArr[i].joke);
  // // }

  const breeds = resultsArr.map((breed) => {
    // console.log(jokeObject);
    return breed;
  });
  // console.log(cleanedJokes);
  console.log(breeds);
  return breeds;
};

catBreed();

// // I need some dom methods to add the jokes to the dom
const createElement = (elType, text, parent) => {
  const el = document.createElement(elType);
  const textNode = document.createTextNode(text);
  el.appendChild(textNode);
  parent.appendChild(el);
};

// const removeAllChildren = (parent) => {
//   console.log(parent.firstChild, "first child");
//   while (parent.firstChild) {
//     parent.removeChild(parent.firstChild);
//   }
// };

// // event listener for my form
const form = document.querySelector("form");
const error = document.getElementById("error");
const resultSection = document.querySelector("section");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const limit = formData.get("limit");
  document.querySelector("section").innerHTML = "";
  error.innerText = "";

  //   // for (const value of formData.values()) {
  //   //     console.log(value, "Value");
  //   // }
  try {
    const cats = await catBreed(limit);
    // console.log(jokes, "jokes");
    // jokes are an array, I want to iterate over them, loop over them
    cats.forEach((cat) => {
      //console.log(jokeText, "JOKE FROM FOR EACH");
      const results = document.createElement("div");
      results.classList.add("results");
      results.innerHTML = `<h3> ${cat.breed} </h3> <p> ${cat.country} </p> <p> ${cat.coat} </p>`;

      // createElement("h3", cat.breed, document.querySelector(".results"));
      // createElement("p", cat.country, document.querySelector(".results"));
      // createElement("p", cat.coat, document.querySelector(".results"));
      resultSection.appendChild(results);
    });
  } catch (e) {
    console.log("ERROR: ", e.message);
    error.innerText = e.message;
  } finally {
    form.reset();
  }
});
