const inputEl = document.querySelector('#validation-input');
console.log(inputEl.value.length);
inputEl.addEventListener('blur', () => {
  if (inputEl.value.length === +inputEl.dataset.length) {
    inputEl.className = 'valid';
  } else {
    inputEl.className = 'invalid';
  }
});
