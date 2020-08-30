const inputRef = document.querySelector("input#counts");
const outputRef = document.querySelector("div#boxes");
const buttonCreateRef = document.querySelector('button[data-action="render"]');
const buttonDestroyRef = document.querySelector(
  'button[data-action="destroy"]'
);

const randomRGB = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

const createBox = (size) => {
  const box = document.createElement("div");
  box.style.backgroundColor = randomRGB();
  box.style.width = size;
  box.style.height = size;
  return box;
};

const createBoxesMarkup = (amount) => {
  const fragment = document.createDocumentFragment();
  const createBoxesWithSize = () => {
    for (let i = 0; i < amount; i += 1) {
      const size = 30 + i * 10 + "px";
      const box = createBox(size);
      fragment.appendChild(box);
    }
  };
  createBoxesWithSize();
  outputRef.appendChild(fragment);
};

const destroyBoxes = () => {
  outputRef.innerHTML = "";
};

buttonCreateRef.addEventListener("click", () => {
  createBoxesMarkup(+inputRef.value);
});
buttonDestroyRef.addEventListener("click", destroyBoxes);
