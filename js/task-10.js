function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const ref = {
  boxesEl: document.querySelector('#boxes'),
  createButton: document.querySelector('[data-create]'),
  desctroyButton: document.querySelector('[data-destroy]'),
  inputEl: document.querySelector('input'),
};

let basicSize = 30;
function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const backgroundColor = getRandomHexColor();
    basicSize += 10;
    let divBox = document.createElement('div');
    divBox.style.backgroundColor = backgroundColor;
    divBox.style.height = basicSize + 'px';
    divBox.style.width = basicSize + 'px';
    divBox.style.marginBottom = '5px';

    ref.boxesEl.append(divBox);
  }
}

function onMakeAmount() {
  createBoxes(ref.inputEl.value);
}
ref.createButton.addEventListener('click', onMakeAmount);
ref.desctroyButton.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  while (ref.boxesEl.firstChild) {
    ref.boxesEl.firstChild.remove();
  }
  basicSize = 30;
  ref.inputEl.value = '';
}
