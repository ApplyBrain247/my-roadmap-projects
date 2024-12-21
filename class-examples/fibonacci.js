// 0 1 1 2 3 5 8 13 21 34

// Problem: generate a fibonacci sequence up to the 10th term

// Solution
// default first two numbers are 0 and 1
// we keep adding the last 2 numbers till we get up to 10 numbers

// functional approach
function fibonacci(numberOfDigits) {
  // declare numbers array with the first 2 fibonacci digits
  let sequence = [0, 1]

  // create a new digit by adding up the last 2 digits in the sequence
  // push in the digit into the sequence
  // continue until the sequence length is up to 10
  while (sequence.length < numberOfDigits) {
    // get the last 2 numbers in the sequence
    let last2numbers = sequence.slice(sequence.length - 2) // [0,2]

    // get the sum of the 2 numbers
    let sumofLast2numbers = last2numbers.reduce(function (partialSum, next) {
      return partialSum + next
    }, 0);

    // append the calculated sum above into the sequence array
    sequence.push(sumofLast2numbers)
  }

  return sequence
}

console.log(fibonacci(30))
