const inputName = document.querySelector("#name");
const errorName = document.querySelector("#nameError");
const inputEmail = document.querySelector("#email");
const errorEmail = document.querySelector("#emailError");
const form = document.querySelector("#newsForm");
const success = document.querySelector("#success-message");
const buttonContainer = document.getElementById("button-container");


function validateForm(event) {
    event.preventDefault();

    if (lenCheck(inputName.value, 4) === true) {
        errorName.style.display = "none";
    } else {
        errorName.style.display = "block";
    }

    if (emailCheck(inputEmail.value) === true) {
        errorEmail.style.display = "none";
    } else {
        errorEmail.style.display = "block";
    }

    if (lenCheck(inputName.value, 4) && emailCheck(inputEmail.value)) {
        
        buttonContainer.innerHTML = `<div class="success">The form has been sent successfully</div>`
    }
}

function lenCheck(item, len) {
    if (item.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function emailCheck(emailAddress) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(emailAddress);
    return patternMatches;
}

form.addEventListener("submit", validateForm);