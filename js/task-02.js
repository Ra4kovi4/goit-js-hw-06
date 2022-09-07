const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listElIngredients = document.querySelector('#ingredients');

const makeComponentElIngredients = ingredients
  .map(ingredient => `<li class ='item'> ${ingredient}</li> `)
  .join('');

listElIngredients.innerHTML = makeComponentElIngredients;
