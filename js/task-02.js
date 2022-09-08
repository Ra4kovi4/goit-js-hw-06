const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listElIngredients = document.querySelector('#ingredients');

const makeComponentElIngredients = ingredients => {
  return ingredients.map(ingredient => {
    const ingredientElComponent = document.createElement('li');
    ingredientElComponent.classList.add('item');
    ingredientElComponent.textContent = ingredient;
    return ingredientElComponent;
  });
};

const ingridientsItem = makeComponentElIngredients(ingredients);
listElIngredients.append(...ingridientsItem);
