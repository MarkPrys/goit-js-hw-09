const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
const btn = document.querySelector('.btn');
const email = document.querySelector('.email');
const message = document.querySelector('.message');

email.addEventListener("input", event => {
  localStorage.setItem("email", event.target.value);
})

message.addEventListener('input', event => {
  localStorage.setItem("message", event.target.value)
})


function loadFormData() {
  const emailData = localStorage.getItem("email");
  const messageData = localStorage.getItem("message");
  if (emailData) {
    form.elements.email.value = emailData;
  }
  if (messageData) {
    form.elements.message.value = messageData;
  }

}


function clearFormData() {
  console.log(form.elements.email.value, form.elements.message.value);
  localStorage.removeItem("email");
  localStorage.removeItem("message");
  form.elements.email.value = '';
  form.elements.message.value = '';

}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (email.value.trim() === '' || message.value.trim() === '') {
    alert('Поля "email" та "message" мають бути заповнені!');
    return;
  }
  clearFormData()
});

window.addEventListener("load", loadFormData);

























