const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

try {
  const initialForm = JSON.parse(localStorage.getItem(localStorageKey));
} catch (error) {
  console.error('ERROR FORM');
}

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
  console.log(obj);
  localStorage.removeItem(localStorageKey);

  form.reset();
});
