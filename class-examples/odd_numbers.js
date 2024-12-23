// Problem: generate x number of odd numbers
// 1 3 5 7 9 11 13 15 17 19

// Solution steps;
// counting through numbers
// check if each number is an odd number
// a number is odd if it has a remainder after it is divided by 2
// if the number is odd, add it to the group of numbers to be returned
// by default, the first odd number is 1
function generateOddNumbers(count) {
    let oddNumbers = [];
    let number = 1;

    while (oddNumbers.length < count) {
        if (number % 2 !== 0) {
            oddNumbers.push(number);
        }
        number++;
    }

    return oddNumbers;
}

console.log(generateOddNumbers(10));