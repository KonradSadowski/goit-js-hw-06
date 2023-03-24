const inputEl = document.querySelector(`#name-input`);
const outputEl = document.querySelector(`#name-output`);

inputEl.addEventListener('input', event => {
  if (inputEl.value !== '') {
    outputEl.textContent = event.currentTarget.value;
  } else {
    outputEl.textContent = 'Anonymous';
  }
});
// inputEl.addEventListener('input', event => {
//   outputEl.textContent = event.currentTarget.value || 'Anonymous';
// });
