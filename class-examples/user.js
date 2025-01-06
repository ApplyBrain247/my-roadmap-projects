/**
 * Create a User class
 * 
 * the user will have the following properties
 * - fullName
 * - emailAddress
 * - phoneNumber
 * - password
 * - dateOfBirth
 * - gender
 * - country
 * - profession
 * 
 * the user object should be able to do the following
 * - validate the following;
 * - - emailAddress - check if it is a valid email address
 * - - phoneNumber - valid phone number (should be 11 digits)
 * - - password - at least 8 characters in length
 * - - dateOfBirth - valid date format and user's age should be at least 18
 * - - gender - valid gender (between male and female)
 * 
 * login - login using email and password
 * updatePassword - validate the current password before updating to the newly provided password
 * 
 */

class UserAccount{
    constructor(fullName, emailAddress, phoneNumber, password, dateOfBirth, gender, country, profession) {
        this.fullName = fullName.trim()
        this.emailAddress = emailAddress.trim()
        this.phoneNumber = phoneNumber.trim()
        this.password = password
        this.dateOfBirth = dateOfBirth.trim()
        this.gender = gender.trim()
        this.country = country.trim()
        this.profession = profession.trim()
    }

    validateEmail() {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(this.emailAddress);
    }

    validatePhoneNumber() {
        return this.phoneNumber.length === 11;
    }

    validatePassword() {
        return this.password.length >= 8;
    }

    validateDateOfBirth() {
        const dateOfBirthRegex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
        if (!dateOfBirthRegex.test(this.dateOfBirth)) {
            return false;
        }

        let birthDate = new Date(this.dateOfBirth);
        let currentDate = new Date();
        if (currentDate.getFullYear() - birthDate.getFullYear() < 18) {
            return false
        }

        return true
    }

    validateGender() {
        return ['male', 'female'].includes(this.gender.toLowerCase());
    }

    isValid() {
        return this.validateEmail() && this.validatePhoneNumber() && this.validatePassword() && this.validateGender();
    }
      
    login(email, password) {
        if (email === this.emailAddress && password === this.password) {
            return `User: ${this.emailAddress} has been logged in`
        }

        return 'Invalid login'
    }

    updatePassword(currentPassword, newPassword) {
        if (currentPassword === this.password) {
            if (this.password.length < 8) {
                return 'Password is too short'
            }
            this.password = newPassword;
            return 'successful';
        }
        else {
            return 'invalid password';
        }
    }
   
}

// const user = new UserAccount('Apply Brain', 'enwehizucukwusam@gmail.com', '07036779411', 'password123', '08/06/1994','male');
// console.log(user.password);
// user.updatePassword('password123', 'password246');
// console.log(user.validatePhoneNumber());

export default UserAccount
