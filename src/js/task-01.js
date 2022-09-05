const countElCategories = document.querySelectorAll('.item');
console.log('Number of categories:', countElCategories.length);

const makeCountElItem = listElements => {
  [...listElements].map(element => {
    console.log('Category:', element.firstElementChild.textContent);
    console.log('Elements:', element.lastElementChild.children.length);
  });
};
makeCountElItem(countElCategories);
