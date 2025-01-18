

import UserAccount from '../../user.js'

class Facebook extends UserAccount {
  constructor(
    firstName,
    lastName,
    dateOfBirth,
    gender,
    emailAddress,
    password
  ) {
    super(
      `${firstName} ${lastName}`,
      emailAddress,
      '',
      password,
      dateOfBirth,
      gender,
      '',
      ''
    )
    this.firstName = firstName.trim()
    this.lastName = lastName.trim()
  }

  validateFirstName() {
    return this.firstName.length >= 3
  }

  validateLastName() {
    return this.lastName.length >= 3
  }
  
  validateGender() {
    return ['male', 'female', 'custom'].includes(this.gender.toLowerCase())
  }

  validateDateOfBirth() {
    let birthDate = new Date(this.dateOfBirth)
    let currentDate = new Date()

    return (currentDate.getFullYear() - birthDate.getFullYear()) >= 18
  }
}

export default Facebook
