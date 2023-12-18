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
} catch (error) {}

form.addEventListener('input', event => {
  const formData = new FormData(form);
  const formObj = {};

  formData.forEach((value, key) => {
    formObj[key] = value;
  });

  localStorage.setItem(localStorageKey, JSON.stringify(formObj));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const obj = JSON.parse(localStorage.getItem(localStorageKey));

  const myFormData = new FormData(form);
  const emailContent = myFormData.get('email');
  const areaContent = myFormData.get('message');

  if (emailContent !== '' && areaContent !== '') {
    console.log(obj);
    localStorage.removeItem(localStorageKey);
    form.reset();
  }
});
