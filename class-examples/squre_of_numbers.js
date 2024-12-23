// problem: return an array comprising of the square of these numbers 

// solution
// iterate through the array
// calculate the square of each number
// return the answer

function squareNumbers(numbers) {
    const squaredNumbers = [];
    for (let number = 0; number < numbers.length; number++) {
        squaredNumbers.push(numbers[number] * numbers[number]);
    }
    return squaredNumbers;
}

console.log(squareNumbers([2, 4, 6, 8, 16]));
