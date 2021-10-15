const inputRef: HTMLInputElement = document.querySelector(
  'input#font-size-control'
);
const textRef: HTMLElement = document.querySelector('span#text');

inputRef.addEventListener('input', () => {
  textRef.style.fontSize = `${inputRef.value}px`;
});

export {};
