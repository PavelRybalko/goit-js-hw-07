const inputRef: HTMLInputElement = document.querySelector('input#counts');
const outputRef: HTMLElement = document.querySelector('div#boxes');
const buttonCreateRef: HTMLElement = document.querySelector(
  'button[data-action="render"]'
);
const buttonDestroyRef: HTMLElement = document.querySelector(
  'button[data-action="destroy"]'
);

const randomRGB = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

const createBox = (size: string) => {
  const box = document.createElement('div');
  box.style.backgroundColor = randomRGB();
  box.style.width = size;
  box.style.height = size;
  return box;
};

const createBoxesMarkup = (amount: number) => {
  const fragment = document.createDocumentFragment();
  const createBoxesWithSize = () => {
    for (let i = 0; i < amount; i += 1) {
      const size = 30 + i * 10 + 'px';
      const box = createBox(size);
      fragment.appendChild(box);
    }
  };
  createBoxesWithSize();
  outputRef.appendChild(fragment);
};

const destroyBoxes = () => {
  outputRef.innerHTML = '';
};

buttonCreateRef.addEventListener('click', () => {
  createBoxesMarkup(+inputRef.value);
});
buttonDestroyRef.addEventListener('click', destroyBoxes);
