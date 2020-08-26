const counterValueRef = document.querySelector("span#value");
const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]'
);
const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]'
);

const incrementFn = () => {
  ++counterValueRef.textContent;
};

const decrementFn = () => {
  --counterValueRef.textContent;
};

incrementBtnRef.addEventListener("click", incrementFn);
decrementBtnRef.addEventListener("click", decrementFn);
