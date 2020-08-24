const inputRef = document.querySelector("input#font-size-control");
const textRef = document.querySelector("span#text");

inputRef.addEventListener("input", () => {
  textRef.style.fontSize = `${inputRef.value}px`;
});
