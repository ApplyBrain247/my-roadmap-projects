class MyString {
  reverseString(str) {
    return str.split('').reverse().join('');
  }
}

const myString = new MyString
const myString2 = new MyString
console.log(myString === myString2)
