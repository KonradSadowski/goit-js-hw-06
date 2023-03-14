const numberOfCategories = document
  .getElementById('categories')
  .getElementsByClassName('item').length;
console.log(`Number of categories: ${numberOfCategories}`);

const categorieName = document.querySelector('h2');
console.log(categorieName.innerHTML);
