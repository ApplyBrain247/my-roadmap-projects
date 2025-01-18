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
  
  if (!facebook.validateFirstName()) {
    firstNameElement.classList.add('error')
    document.getElementById('first-name-error-messg').textContent = 'What is your name?'
    document.getElementById('first-name-error-messg').style.cssText = `
    display:block; 
    position:absolute; 
    color:white; 
    width:100px; 
    background-color:red; 
    margin-left:-100px;
    `

  } else {
    firstNameElement.classList.remove('error')
    document.getElementById('first-name-error-messg').textContent = ''

}
  }

  if (!facebook.validateLastName()) {
    lastNameElement.classList.add('error')
    document.getElementById('surname-error-messg').textContent = 'What is your last name?'
   
  } else {
    lastNameElement.classList.remove('error')
    document.getElementById('surname-error-messg').textContent = ''

  }

  const dobElements = [dayElement, monthElement, yearElement]
  const dobIsValid = facebook.validateDateOfBirth()
  for (let element of dobElements) {
    if (!dobIsValid) {
      element.classList.add('error')
      document.getElementById('dob-error-messg').textContent = 'It looks like you have entered the wrong info. Please make sure that you use your real date o birth'
    } else {
      element.classList.remove('error')
      document.getElementById('dob-error-messg').textContent = ''

    }
  }

  const genders = document.getElementsByClassName('gender')
  const genderIsValid = facebook.validateGender()
  for (let gender of genders) {
    if (!genderIsValid) {
      gender.classList.add('error')
    } else {
      gender.classList.remove('error')
    }
  }

  if (!facebook.validateEmail()) {
    emailElement.classList.add('error')
    document.getElementById('email-error-messg').textContent = 'You will use this when you log in and if you ever need to reset your password'
  } else {
    emailElement.classList.remove('error')
    document.getElementById('email-error-messg').textContent = ''
  }

  if (!facebook.validatePassword()) {
    passwordElement.classList.add('error')
    document.getElementById('password-error-messg').textContent = 'Your password should be atleast Eight numbeers'
  } else {
    passwordElement.classList.remove('error')
    document.getElementById('password-error-messg').textContent = ''
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
