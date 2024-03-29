import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast/dist/js/iziToast.min.js';

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

form.addEventListener('input', event => {
    if (event.target.name === 'email' || event.target.name === 'message') {
        const formData = {
            email: form.elements.email.value.trim(),
            message: form.elements.message.value.trim()
        };
        localStorage.setItem(localStorageKey, JSON.stringify(formData));
    }
});

function loadFormData() {
    const formData = JSON.parse(localStorage.getItem(localStorageKey));
    if (formData) {
        form.elements.email.value = formData.email;
        form.elements.message.value = formData.message;
    }

}

function clearFormData() {
    localStorage.removeItem(localStorageKey);
    form.reset();
}

form.addEventListener('submit', event => {
    console.log({
        email: form.elements.email.value,
        message: form.elements.message.value,
    });
    event.preventDefault();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    if (!email || !message) {
        iziToast.warning({
            message: 'Поля Email та Message мають бути заповнені',
        });
        return
    }
    clearFormData();
});

window.addEventListener('load', loadFormData);

