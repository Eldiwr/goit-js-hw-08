import throttle from "lodash.throttle";


const form = document.querySelector('.feedback-form');
const TEXT_FORM = 'feedback-form-state';
const formData = JSON.parse(localStorage.getItem(TEXT_FORM)) || {};

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);


populateMessage();

function onFormInput(event){
    formData[event.target.name] = event.target.value;

    localStorage.setItem(TEXT_FORM, JSON.stringify(formData));
};

function onFormSubmit(event) {
    event.preventDefault();
    
    event.currentTarget.reset();
    localStorage.removeItem(TEXT_FORM);
    console.log(formData);
    
};

function populateMessage() {
    const savedMessage = JSON.parse(localStorage.getItem(TEXT_FORM));
    
    if (savedMessage) {
        form.elements.email.value = savedMessage.email || "";
        form.elements.message.value = savedMessage.message || "";       
    }
};

