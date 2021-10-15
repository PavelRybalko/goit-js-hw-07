const counterValueRef = document.querySelector('span#value');
const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]'
);
const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]'
);

const incrementFn = () => {
  Number(counterValueRef.textContent) + 1;
};

const decrementFn = () => {
  Number(counterValueRef.textContent) - 1;
};

incrementBtnRef.addEventListener('click', incrementFn);
decrementBtnRef.addEventListener('click', decrementFn);

export {};
