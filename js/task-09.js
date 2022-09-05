function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color');
const valueColor = document.querySelector('.color');

buttonEl.addEventListener('click', onChangeBodyColor);

function onChangeBodyColor() {
  const body = document.body;
  valueColor.textContent = getRandomHexColor();
  body.style.backgroundColor = valueColor.textContent;
}
