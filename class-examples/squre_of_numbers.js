// problem: return an array comprising of the square of these numbers 

// solution
// iterate through the array
// calculate the square of each number
// return the answer

function squareNumbers(numbers) {
    const squaredNumbers = [];
    // for (let i = 0; i < numbers.length; i++) {
    //     squaredNumbers.push(numbers[number] * numbers[number]);
    // }

    for (number of numbers) {
        squaredNumbers.push(number * number)
    }
    return squaredNumbers;
}

console.log(squareNumbers([2, 4, 6, 8, 16]));

function squareNumbers2(numbers) {
    return numbers.map(function(number) {
        return number * number
    })
}
