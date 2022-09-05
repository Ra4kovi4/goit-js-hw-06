const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onButtonSubmit);

function onButtonSubmit(event) {
  event.preventDefault();

  const formDataElements = event.currentTarget.elements;

  const email = formDataElements.email.value;
  const password = formDataElements.password.value;

  if (email === '' || password === '') {
    return alert('Все поля должны быть заполнены!');
  }
  const formData = { email, password };
  console.log(formData);

  event.currentTarget.reset();
}
