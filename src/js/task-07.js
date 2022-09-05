const sizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

sizeControlEl.addEventListener('input', onChangeTextSize);
function onChangeTextSize(event) {
  textEl.style.fontSize = event.currentTarget.value + 'px';
  console.log(event.currentTarget.value);
}
