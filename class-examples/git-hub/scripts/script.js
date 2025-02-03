import Github from './github.js'

document.getElementById('sign-up-form').addEventListener('submit', submitForm)

function submitForm(event) {
    event.preventDefault()
    
    const emailElement = document.getElementById('email')
    const passwordElement = document.getElementById('password')
    const userNameElement = document.getElementById('username')

    const emailError = document.getElementById('email-error-messg')
    const passwordError = document.getElementById('password-error-messg')
    const userNameError = document.getElementById('username-error-message')

    const email = emailElement.value
    const password = passwordElement.value
    const userName = userNameElement.value

    const github = new Github (email, userName , password)

    const emailValidation = github.validateEmail()
    emailError.textContent = emailValidation
    if (emailValidation) {
        emailElement.classList.add('error')
    } else {
        emailElement.classList.remove('error')
    }

    const passwordValidation = github.validatePassword()
    passwordError.textContent = passwordValidation
    if (passwordValidation) {
        passwordElement.classList.add('error')
    } else {
        passwordElement.classList.remove('error')
    }

    const userNameValidation = github.validateUserName()
    userNameError.textContent = userNameValidation
    if (userNameValidation) {
        userNameElement.classList.add('error')
    } else {
        userNameElement.classList.remove('error')
    }

    if (!emailValidation && !passwordValidation && !userNameValidation) {
        document.getElementById('sign-up-form').submit()
    }
}