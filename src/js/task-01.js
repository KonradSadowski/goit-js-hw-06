const numberOfCategories = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${numberOfCategories.length}`);

for (const element of numberOfCategories) {
  console.log(`Category: ${element.children[0].innerText}`);
  console.log(`Elements: ${element.children[1].children.length}`);
}
