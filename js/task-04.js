let counterValue = 0;
const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

incrementEl.addEventListener('click', onIncrementButtonClick);
decrementEl.addEventListener('click', onDecrementButtonClick);

function onIncrementButtonClick() {
  counterValue += 1;
  value.textContent = counterValue;
}
function onDecrementButtonClick() {
  counterValue -= 1;
  value.textContent = counterValue;
}
