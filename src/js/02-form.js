const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

function chekFormValue(obj) {
  Array.from(form.elements).forEach(element => {
    let currentValue = obj[element.name];
    if (currentValue) {
      element.value = currentValue;
    }
  });
}

try {
  const defaultObject = {};
  const initialForm =
    JSON.parse(localStorage.getItem(localStorageKey)) ?? defaultObject;

  chekFormValue(initialForm);
} catch (error) {
  console.log(error.message);
}

form.addEventListener('input', event => {
  const formData = new FormData(form);
  const formObj = {};

  formData.forEach((value, key) => {
    formObj[key] = value.trim();
  });

  localStorage.setItem(localStorageKey, JSON.stringify(formObj));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const obj = JSON.parse(localStorage.getItem(localStorageKey));

  const myFormData = new FormData(form);
  const emailContent = myFormData.get('email');
  const areaContent = myFormData.get('message');

  if (emailContent.trim() !== '' && areaContent.trim() !== '') {
    console.log(obj);
    localStorage.removeItem(localStorageKey);
    form.reset();
  }
});
