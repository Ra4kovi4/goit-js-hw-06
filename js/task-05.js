const refs = {
  inputEl: document.querySelector('#name-input'),
  nameOutputEl: document.querySelector('#name-output'),
};

refs.inputEl.addEventListener('input', onFillInput);

function onFillInput(event) {
  refs.nameOutputEl.textContent = event.currentTarget.value
    ? event.currentTarget.value
    : 'Anonymous';
}
