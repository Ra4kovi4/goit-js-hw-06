const inputEl = document.querySelector('[data-length="6"]');
inputEl.addEventListener('blur', onAddClass);

function onAddClass(event) {
  const textContentLength = event.currentTarget.value.length;
  if (textContentLength !== Number(inputEl.dataset.length)) {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  } else {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  }
}
