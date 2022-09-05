const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listElIngredients = document.querySelector('#ingredients');

const makeComponentElIngredients = arrayIngredients => {
  arrayIngredients.map(ingredient => {
    const ingredientElComponent = document.createElement('li');
    ingredientElComponent.classList.add('item');
    ingredientElComponent.textContent += ingredient;
    listElIngredients.append(ingredientElComponent);
    return ingredientElComponent;
  });
};

makeComponentElIngredients(ingredients);
