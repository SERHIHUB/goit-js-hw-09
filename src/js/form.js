const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

try {
  const initialForm = JSON.parse(localStorage.getItem(localStorageKey));

  Array.from(form.elements).forEach(element => {
    let currentValue = initialForm[element.name];
    if (currentValue) {
      element.value = currentValue;
    }
  });
} catch (error) {
  console.log(error.message);
}

let inputContent = '';
let textContent = '';

form.addEventListener('input', event => {
  const formData = new FormData(form);
  const formObj = {};

  formData.forEach((value, key) => {
    formObj[key] = value;
    inputContent = formObj.email;
    textContent = formObj.message;
  });

  localStorage.setItem(localStorageKey, JSON.stringify(formObj));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const obj = JSON.parse(localStorage.getItem(localStorageKey));

  if (inputContent !== '' && textContent !== '') {
    console.log(obj);
    localStorage.removeItem(localStorageKey);
    form.reset();
  }
});
