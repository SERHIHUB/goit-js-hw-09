const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('message');
const localStorageKey = 'feedback-form-state';

form.addEventListener('submit', event => {
  evt.preventDefault();
  console.log(event.target.elements.message.value);
  form.reset();
});

form.addEventListener('input', event => {
  localStorage.setItem(localStorageKey, event.target.value);
});
