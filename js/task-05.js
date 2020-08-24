const inputRef = document.querySelector("input#name-input");
const outputRef = document.querySelector("span#name-output");

const isInput = () =>
  inputRef.value
    ? (outputRef.textContent = inputRef.value)
    : (outputRef.textContent = "незнакомец");

inputRef.addEventListener("input", isInput);
