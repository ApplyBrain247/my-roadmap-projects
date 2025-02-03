import UserAccount from '../../user.js';

class Github extends UserAccount {
    constructor ( emailAddress, userName, password){
        super(
            '',
            emailAddress,
            '',
            password,
            '',
            '',
            '',
            '',
        )
        this.userName = userName.trim()
    }
    validateUserName() {
        return this.userName.length >= 3 ? null : 'Username cannot be blank.'
      }
}

export default Github