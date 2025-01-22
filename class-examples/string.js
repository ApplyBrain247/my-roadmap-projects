import ApplyBrain from './user.js'

class MyString {
  reverseString(str) {
    return str.split('').reverse().join('');
  }
}

const myString = new MyString
const myString2 = new MyString
// console.log(myString === myString2)

const emma = new ApplyBrain('emma nuel', 'emma@gmail.com', '08012345678', '12345678', '01/01/2024', 'female')
console.log(emma.login('emma@gmail.com', '123456789'))
