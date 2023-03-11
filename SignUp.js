function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector('.form__message');

    messageElement.textContent = message;
    messageElement.classList.remove('form__message--success', 'form__message--error');
    meesageElement.classList.add('form__message--${type}');
}

function setInputError(inputElement, message) {
    inputElement.claasList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

setFormMessage(loginForm, "success", "You are logged in!");

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#login');
    const createAccountForm = document.querySelector('#createAccount');

    document.querySelector("linkCreateAccount").addEventListener("click", e => {
        e.preventDefualt();
        loginForm.classList.add("form--hidden"); 
        createAccountForm.classList.remove("form--hidden");    
    });
    document.querySelector("linkLogin").addEventListener("click", e => {
        e.preventDefualt();
        loginForm.classList.remove("form--hidden"); 
        createAccountForm.classList.add("form--hidden");});
    loginForm.addEventListener("submit", e => {
        e.preventDefualt();

        //Perform your Ajax/Fet login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.lenght > 0 && e.target.value.lenght < 10 {
                setInputError(inputElement, "Username must be at least 10 characters in lenght");
            }) 
        })
    })

});
