let counterValue = 0;

const incrementFn = () => {
  counterValue += 1;
  updateCounter(counterValue);
};

const decrementFn = () => {
  counterValue -= 1;
  updateCounter(counterValue);
};

const updateCounter = (value) => (spanRef.textContent = value);

const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]'
);
const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]'
);

const spanRef = document.querySelector("span#value");

incrementBtnRef.addEventListener("click", incrementFn);
decrementBtnRef.addEventListener("click", decrementFn);
