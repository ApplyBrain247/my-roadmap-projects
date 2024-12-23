class MyNumber {
  generateFibonacci(numberOfDigits) {
    let sequence = [0, 1]
  
    while (sequence.length < numberOfDigits) {
      let last2numbers = sequence.slice(sequence.length - 2) // [0,2]
      let sumofLast2numbers = last2numbers.reduce(function (partialSum, next) {
        return partialSum + next
      }, 0);
      sequence.push(sumofLast2numbers)
    }
  
    return sequence
  }

  generateOddNumbers(count) {
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

  getEvenNumbers(numbers) {
    return numbers.filter(function(number) {
      return number % 2 === 0;
    })
  }

  squareOfNumbers(numbers) {
    return numbers.map(function(number) {
      return number * number
    })
  }
}

const myNumber = new MyNumber
console.log(myNumber.generateFibonacci(10))
