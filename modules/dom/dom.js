export const createEl = (elType, textVal, parent) => {
  const el = document.createElement(elType);
  const text = document.createTextNode(textVal);
  el.appendChild(text);
  parent.appendChild(el);
};

export const removeEl = (elToRemove, parent, id="defaultID") => {
  if (elToRemove) {
    parent.removeChild(elToRemove);
  }
};

// export const replaceEl = (elType, textVal, parent) => {
//   const el = document.createElement(elType);
//   const text = document.createTextNode(textVal);
//   el.replaceChild(text);
//   parent.replaceChild(el);
// };


