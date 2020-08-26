const inputRef = document.querySelector("input#counts");
const outputRef = document.querySelector("div#boxes");
const buttonCreateRef = document.querySelector('button[data-action="render"]');
const buttonDestroyRef = document.querySelector(
  'button[data-action="destroy"]'
);

const randomRGB = () => Math.round(Math.random() * 255);

const createBoxes = (amount) => {
  let markupArr = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.backgroundColor = `rgb(${randomRGB()},${randomRGB()},${randomRGB()})`;
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    markupArr = [...markupArr, box];
  }
  outputRef.append(...markupArr);
};

const destroyBoxes = () => {
  outputRef.innerHTML = "";
};

buttonCreateRef.addEventListener("click", () => {
  createBoxes(+inputRef.value);
});
buttonDestroyRef.addEventListener("click", destroyBoxes);
