
const delayedIncDec = (n, mode, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (delay === "undefined") {
        delay === 2500;
      }
      if (mode === "inc") {
        resolve(n + 1);
      } else if (mode === "dec") {
        resolve(n - 1);
      } else {
        reject("Sorry could not get number");
      }
    }, delay);
  });
};

delayedIncDec(3, "inc")
  .then((value) => {
    console.log(`The promise resolved with the value of ${value}`);
  })
  .catch((error) => {
    console.log(`The promise reject with the error of: ${error}`);
  })
  .finally(() => {
    console.log("Promise no longer pending");
  });

console.log(
  delayedIncDec(3, "inc", 5000),
  "what delayedIncDec function returned"
);
// console.log(delayedIncDec(3, "inc", 0), "what delayedIncDec function returned");

// console.log(delayedIncDec(2, "hello"));
// console.log(delayedIncDec(3, "inc", 2500));

// const randomPromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNum = Math.floor(Math.random() * 10) + 1;
//       if (randomNum >= 5) {
//         resolve(randomNum);
//       } else {
//         reject("Sorry could not get number");
//       }
//     }, 3000);
//   });
// };

// console.log(randomPromise(), "what random promise function returned");

// randomPromise()
//   .then((value) => {
//     console.log(`The promise resolved with the value of ${value}`);
//   })
//   .catch((error) => {
//     console.log(`The promise reject with the error of: ${error}`);
//   })
//   .finally(() => {
//     console.log("Promise no longer pending");
//   });
