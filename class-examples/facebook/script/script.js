import Facebook from './facebook.js'

/**
 * Populate Date of Birth inputs
 * 
 * day: 1 - 31
 * month: Jan - Dec
 * year: current year - (current year - 100 years)
 */

// day
const dayElement = document.getElementById('day')
for (let i = 1; i <= 31; i++) {
  const optionElement = document.createElement('option')
  optionElement.value = i
  optionElement.textContent = i


  dayElement.appendChild(optionElement)
}

// month
const monthElement = document.getElementById('month')
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]
for (let month of months) {
  const optionElement = document.createElement('option')
  optionElement.value = month
  optionElement.textContent = month

  monthElement.appendChild(optionElement)
}

// year
const yearElement = document.getElementById('year')
const currentYear = (new Date).getFullYear()
for (let year = currentYear; year >= currentYear - 100; year--) {
  const optionElement = document.createElement('option')
  optionElement.value = year
  optionElement.textContent = year

  yearElement.appendChild(optionElement)
}

// validate inputs
// const inputs = document.querySelectorAll('input')
// console.log(inputs.length)
// for (let input of inputs) {
//   input.addEventListener('blur', function() {
//     if (this.value == '') {
//       this.classList.add('error')
//     }
//   })
// }

document.getElementById('signup-form').addEventListener('submit', submitForm)

function submitForm(event) {
  event.preventDefault()

  const firstNameElement = document.getElementById('first-name')
  const lastNameElement = document.getElementById('surname')
  const dayElement = document.getElementById('day')
  const monthElement = document.getElementById('month')
  const yearElement = document.getElementById('year')
  const emailElement = document.getElementById('email')
  const passwordElement = document.getElementById('password')

  const firstNameError = document.getElementById('first-name-error-messg')
  const lastNameError = document.getElementById('surname-error-messg')
  const dobError = document.getElementById('dob-error-messg')
  const genderError = document.getElementById('gender-error-messg')
  const emailError = document.getElementById('email-error-messg')
  const passwordError = document.getElementById('password-error-messg')
  
  const firstName = firstNameElement.value
  const lastName = lastNameElement.value
  const day = dayElement.value
  const month = monthElement.value
  const year = yearElement.value
  const gender = getSelectedGender()
  const email = emailElement.value
  const password = passwordElement.value

  const facebook = new Facebook(
    firstName,
    lastName,
    `${day}/${month}/${year}`,
    gender,
    email,
    password
  )
  
  const firstNameValidation = facebook.validateFirstName()
  firstNameError.textContent = firstNameValidation
  if (firstNameValidation) {
    firstNameElement.classList.add('error')
  } else {
    firstNameElement.classList.remove('error')
  }

  const lastNameValidation = facebook.validateLastName()
  lastNameError.textContent = lastNameValidation
  if (lastNameValidation) {
    lastNameElement.classList.add('error')
  } else {
    lastNameElement.classList.remove('error')
  }

  const dobValidation = facebook.validateDateOfBirth()
  dobError.textContent = dobValidation
  if (dobValidation) {
    dayElement.classList.add('error')
    monthElement.classList.add('error')
    yearElement.classList.add('error')
  } else {
    dayElement.classList.remove('error')
    monthElement.classList.remove('error')
    yearElement.classList.remove('error')
  }

  const genders = document.getElementsByClassName('gender')
  const genderValidation = facebook.validateGender()
  for (let gender of genders) {
    if (genderValidation) {
      gender.classList.add('error')
    } else {
      gender.classList.remove('error')
    }
  }
  genderError.textContent = genderValidation

  const emailValidation = facebook.validateEmail()
  emailError.textContent = emailValidation
  if (emailValidation) {
    emailElement.classList.add('error')
  } else {
    emailElement.classList.remove('error')
  }

  const passwordValidation = facebook.validatePassword()
    passwordError.textContent = passwordValidation
    if (passwordValidation) {
    passwordElement.classList.add('error')
  } else {
    passwordElement.classList.remove('error')
  }

function getSelectedGender() {
  const genders = document.getElementsByName('gender')
  for (let gender of genders) {
    if (gender.checked) {
      return gender.value
    }
  }                                                                     
  return ''
}
}
