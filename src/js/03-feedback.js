
const form = document.querySelector('.feedback-form');

const formData = {};
const TEXT_FORM = 'feedback-form-state';

populateTextarea();

form.addEventListener('submit', onFormSubmit);

form.addEventListener('input', event => {
    formData[event.target.name] = event.target.value;

    localStorage.setItem(TEXT_FORM, JSON.stringify(formData));
});

function onFormSubmit(event) {
    event.preventDefault();

    event.currentTarget.reset();
    localStorage.removeItem(TEXT_FORM);
}

function populateTextarea() {
    const savedMessage = JSON.parse(localStorage.getItem(TEXT_FORM));

    if (savedMessage) {
        form.email.value = savedMessage.email;
        form.message.value = savedMessage.message;
    }
}