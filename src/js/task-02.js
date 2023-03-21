const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const list = document.querySelector(`#ingredients`);
let newLi = document.createElement(`li`);

ingredients.forEach(function (e) {
  newLi = document.createElement(`li`);
  newLi.textContent = e;
  newLi.classList.add(`item`);
  list.append(newLi);
});
console.log(newLi);
