

import UserAccount from '../../user.js'

class Instagram extends UserAccount {
  constructor(
    fullName,
    userName,
    emailAddress,
    password
  ) {
    super(
      `${fullName} ${userName}`,
      emailAddress,
      '',
      password,
      '',
      ''
    )
    this.fullName = fullName.trim()
    this.userName = userName.trim()
  }

  validateFullName() {
    return this.fullName.length >=3 ? null : 'First name must be at least 3 characters long.'
  }

  validateUserName() {
    return this.UserName.length >= 3 ? null : 'Last name must be at least 3 characters long.'
  }
}

export default Instagram
