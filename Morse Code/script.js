const morseTranslator = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

const form1 = document.getElementById("form-word-morse");
const form2 = document.getElementById("form-morse-word");
const error = document.getElementById("errors");

form1.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData1 = new FormData(form1);
  const wordToMorse = formData1.get("word");
  console.log(wordToMorse);

  error.innerText = "";
  const wordSplit = wordToMorse.toUpperCase().split("");
  console.log(wordSplit);

  try {
    const morse = wordSplit.map((x) => {
      return morseTranslator[x];
    });
    console.log(morse);

    document.getElementById("morse-word-area").value = morse.join(" ");
    document.getElementById("results1").innerText = morse.join(" ");
  } catch (e) {
    console.log("Error:", e.message);
    error.innerText = e.message;
  } finally {
    form1.reset();
  }
});

form2.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData2 = new FormData(form2);
  let wordToMorse1 = formData2.get("morse-word-area");
  console.log(wordToMorse1);

  let wordToMorse = wordToMorse1.split(" ");

  error.innerText = "";

  try {
    const morseToWord = wordToMorse.map((n) => {
      return Object.keys(morseTranslator).find(
        (key) => morseTranslator[key] === n
      );
    });

    document.getElementById("word").value = morseToWord.join(" ");
    document.getElementById("results2").innerText = morseToWord.join(" ");
  } catch (e) {
    console.log("Error:", e.message);
    error.innerText = e.message;
  } finally {
    form2.reset();
  }
});

// const morseCode = (words) => {};

// // console.log(typeof morseTranslator);

// // let words = "HELLO";
// // let wordSplit = words.split("");
// // console.log(wordSplit); //word to Morse
// // const morse = wordSplit.map((x) => {
// //   return morseTranslator[x];
// // });
// // console.log(morse);

// // console.log(morse.join(" "));
// // const morseWord = ".... . .-.. .-.. ---".join;
// // console.log(morseWord);
// // console.log(
// //   Object.keys(morseTranslator).find((key) => morseTranslator[key] === "....")
// // );

// // //morse to Word

// let morse1 = ".... . .-.. .-.. ---";
// console.log(morse1);
// let morse = morse1.split(" ");
// console.log(morse);
// const morseToWord = morse.map((n) => {
//   return Object.keys(morseTranslator).find((key) => morseTranslator[key] === n);
// });

// console.log(morseToWord);
