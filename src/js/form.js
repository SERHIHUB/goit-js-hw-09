const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

try {
  const initialForm = JSON.parse(localStorage.getItem(localStorageKey));

  Array.from(form.elements).forEach(element => {
    const carrentValue = initialForm[element.name];
    if (carrentValue) {
      element.value = carrentValue;
    }
  });
} catch (error) {
  console.error('ERROR FORM');
}

form.addEventListener('input', event => {
  const formObj = {};
  const formData = new FormData(form);

  formData.forEach((value, key) => {
    formObj[key] = value;
  });

  localStorage.setItem(localStorageKey, JSON.stringify(formObj));
  console.log(formObj);
});

form.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem(localStorageKey);
  form.reset();
});
