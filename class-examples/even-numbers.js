// problem: generate x number of even numbers
// 2 4 6 8 10 12 14 16 18 20

// soln
// counting through numbers
// check if each number is an even number
// a number is an even number if their is no remainder after it is divided by 2
// if number is even, add it to the group of numbers to be reurned
// by default, the first even number is 0

function getEvenNumber(count) {
    let evenNumber = [];
    let number = 0;
    while (evenNumber.length < count) {
        if (number % 2== 0) {
            evenNumber.push(number)
        }
        number++;
    }
    return evenNumber
}
console.log(getEvenNumber(10));

