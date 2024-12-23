// problem:  return the even numbers in a given group of random numbers

// soln
// Iterate through array of numbers
// check if each number passes the condition of being an even number
// even numbers are numbers that are divisible by two without a remainder
// if a number is even, append the number to new array.


function getEvenNumbers(numbers) {
    let evenNumbers = [];
    for (number of numbers) {
        if (number % 2 === 0){
            evenNumbers.push(number)
        }
    }
    return evenNumbers
}
console.log(getEvenNumbers2([1, 2 , 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]));

function getEvenNumbers2(numbers) {
    return numbers.filter(function(number) {
        return number % 2 === 0;
    })
}
