import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";

const parseStorageKey = JSON.parse(localStorage.getItem(STORAGE_KEY));
let formData = {...parseStorageKey};

form.addEventListener('submit', onFromSubmit);
form.addEventListener('input', throttle(onInput, 500));

completedForm();

function onFromSubmit(evt) {
    evt.preventDefault();
    console.log(formData);
    formData = {};
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function completedForm() {
    formData.email === undefined ? form.elements.email.value = "" : form.elements.email.value = formData.email;
    formData.message === undefined ? form.elements.message.value = "" : form.elements.message.value = formData.message;
}
// import throttle from "lodash.throttle";


// const form = document.querySelector('.feedback-form');
// const TEXT_FORM = 'feedback-form-state';
// const formData = JSON.parse(localStorage.getItem(TEXT_FORM)) || {};

// form.addEventListener('input', throttle(onFormInput, 500));
// form.addEventListener('submit', onFormSubmit);


// populateMessage();

// function onFormInput(event){
//     formData[event.target.name] = event.target.value;

//     localStorage.setItem(TEXT_FORM, JSON.stringify(formData));
// };

// function onFormSubmit(event) {
//     event.preventDefault();

//     event.currentTarget.reset();
//     localStorage.removeItem(TEXT_FORM);
// };

// function populateMessage() {
//     const savedMessage = JSON.parse(localStorage.getItem(TEXT_FORM));
    
//     if (savedMessage) {
//         form.elements.email.value = savedMessage.email || "";
//         form.elements.message.value = savedMessage.message || "";       
//     }
// };

