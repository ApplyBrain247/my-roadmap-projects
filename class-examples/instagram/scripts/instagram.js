import UserAccount from '../../user.js';

class Instagram extends UserAccount {
  constructor(
    fullName,
    userName,
    emailAddress,
    password
  ) {
    super(
      fullName,
      emailAddress,
      '',
      password,
      '',
      '',
      '',
      ''
    )
    this.userName = userName.trim()
  }

  validateFullName() {
    return this.fullName.length >=3 ? null : 'Full name must be at least 3 characters long.'
  }

  validateUserName() {
    return this.userName.length >= 3 ? null : 'User name must be at least 3 characters long.'
  }
}

export default Instagram
