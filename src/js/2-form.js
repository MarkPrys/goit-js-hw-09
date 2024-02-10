const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

form.addEventListener('input', event => {
    if (event.target.matches('.email, .message')) {
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
    event.preventDefault();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();
    if (!email || !message) {
        alert('Fields "email" and "message" must be filled!');
        return;
    }
    clearFormData();
});

window.addEventListener('load', loadFormData);
