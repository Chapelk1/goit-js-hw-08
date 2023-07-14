import throttle from 'lodash.throttle';
const refs = {
  form: document.querySelector('.feedback-form'),
};
const FORM_DATA_KEY = 'feedback-form-state';
const formFeedbackData = {
  ...JSON.parse(localStorage.getItem(FORM_DATA_KEY)),
};
populateTextInput();

refs.form.addEventListener('input', throttle(onChangeInValue, 500));
refs.form.addEventListener('submit', onSubmitForm);

function onChangeInValue(e) {
  const inputName = e.target.name;
  const inputValue = e.target.value;
  formFeedbackData[inputName] = inputValue;
  localStorage.setItem(FORM_DATA_KEY, JSON.stringify(formFeedbackData));
}

function onSubmitForm(e) {
    e.preventDefault();
    const {
      elements: { email, message },
    } = e.currentTarget;
  if (email.value === '' || message.value === '') {
    return alert('Усі поля повинні бути заповнені!');
  }
  console.log(JSON.parse(localStorage.getItem(FORM_DATA_KEY)));
  e.currentTarget.reset();
  localStorage.removeItem(FORM_DATA_KEY);
  Object.keys(formFeedbackData).forEach(key => delete formFeedbackData[key]);
}

function populateTextInput() {
  const formData = JSON.parse(localStorage.getItem(FORM_DATA_KEY));
  if (formData) {
      for (let key in formData) {
        refs.form[key].value = formData[key]
      }
    return;
  }
  localStorage.setItem(FORM_DATA_KEY, JSON.stringify(formFeedbackData));
}
