import Instagram from '../instagram.js'


document.getElementById('sign-up-form').addEventListener('submit', submitForm)

function submitForm(event) {
    event.preventDefault()
  
    const fullNameElement = document.getElementById('full-name')
    const userNameElement = document.getElementById('user-name')
    const passwordElement = document.getElementById('password')
    const emailElement = document.getElementById('email')

    const emailError = document.getElementById('email-error-messg')
    const passwordError = document.getElementById('password-error-messg')
    const fullNameError = document.getElementById('full-name-error-message')
    const userNameError = document.getElementById('username-error-message')

    const fullName = fullNameElement.value
    const userName = userNameElement.value
    const email = emailElement.value
    const password = passwordElement.value

    const instagram = new Instagram(
        fullName,
        userName,
        email,
        password
      )

    const fullNameValidation = instagram.validateFirstName()
    fullNameError.textContent = fullNameValidation
    if (fullNameValidation) {
    fullNameElement.classList.add('error')
    }  
    else {
    firstNameElement.classList.remove('error')
    }

    const userNameValidation = instagram.validateLastName()
    userNameError.textContent = userNameValidation
    if (userNameValidation) {
      userNameValidation.classList.add('error')
    } else {
      userNameElement.classList.remove('error')
    }

    const emailValidation = instagram.validateEmail()
    emailError.textContent = emailValidation
    if (emailValidation) {
    emailElement.classList.add('error')
    } 
    else {
    emailElement.classList.remove('error')
    }

    const passwordValidation = instagram.validatePassword()
    passwordError.textContent = passwordValidation
    if (passwordValidation) {
    passwordElement.classList.add('error')
    } 
    else {
    passwordElement.classList.remove('error')
    }
}

  