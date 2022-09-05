// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должны иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const ref = {
  boxesEl: document.querySelector('#boxes'),
  createButton: document.querySelector('[data-create]'),
  desctroyButton: document.querySelector('[data-destroy]'),
  inputEl: document.querySelector('input'),
};

function createBoxes(amount) {
  let heightBox = 30;
  let widthBox = 30;

  for (let i = 0; i < amount; i += 1) {
    const backgroundColor = getRandomHexColor();
    let divBox = document.createElement('div');
    divBox.style.backgroundColor = getRandomHexColor();
    divBox.style.height += heightBox + 'px';
    divBox.style.width += widthBox + 'px';
    divBox.style.marginBottom = '5px';
    heightBox += 10;
    widthBox += 10;
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
  ref.inputEl.value = '';
}
