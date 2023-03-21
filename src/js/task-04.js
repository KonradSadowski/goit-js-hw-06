let decrement = document.querySelector(`button[data-action="decrement"]`);
let increment = document.querySelector(`button[data-action="increment"]`);
let counterDisplay = document.querySelector(`#value`);

let counterValue = 0;

increment.addEventListener('click', () => {
  counterValue++;
  updateCounter();
});

decrement.addEventListener('click', () => {
  counterValue--;
  updateCounter();
});

function updateCounter() {
  counterDisplay.innerHTML = counterValue;
}
