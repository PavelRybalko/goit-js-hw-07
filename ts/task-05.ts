const inputRef: HTMLInputElement = document.querySelector('input#name-input');
const outputRef: HTMLElement = document.querySelector('span#name-output');

const isInput = () =>
  inputRef.value
    ? (outputRef.textContent = inputRef.value)
    : (outputRef.textContent = 'незнакомец');

inputRef.addEventListener('input', isInput);
export {};
