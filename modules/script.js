import { rectanglePerim } from "./math/rectangle.js";
import { createEl, removeEl, replaceEl } from "./dom/dom.js";
import { circlePerim } from "./math/cricle.js";

// I want ot keep my logic separate from updating the dom
// this function calculates and returns the perim
// instead of calculating and updating the dom and returning undefined

const rectangleForm = document.getElementById("rectangleForm");
const circleForm = document.getElementById("circleForm");

console.log(circleForm);

rectangleForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(rectangleForm);
  const height = +formData.get("x");
  const width = +formData.get("y");
  const perim = rectanglePerim(height, width);
  console.log(perim);
  // now I need ot add this to the dom
  createEl(
    "p",
    `The perimeter of a retangle with width of ${width} and height of ${height} is ${perim}`,
    document.querySelector("#rectangleResult")
  );
});

circleForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(circleForm);
  const radius = +formData.get("r");
  const perim = circlePerim(radius);
  console.log(perim);
  //now I need ot add this to the dom
  const parent = document.querySelector("#circleRes");
  removeEl(
    document.getElementById("resultElement"),
    document.getElementById("circleRes")
  );

  createEl(
    "p",
    `The perimeter of a circle with radius of ${radius} is ${perim}`,
    document.querySelector("#circleRes")
  );
});
