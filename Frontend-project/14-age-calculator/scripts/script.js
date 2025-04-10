let userInput = document.getElementById('date');
userInput.max = new Date().toISOString().split('T')[0];
let result = document.getElementById('result');

function calculateAge() {
    // Setting input date as birthdate
    let birthDate = new Date(userInput.value);
    
    //getting birth day components
    let birthDay = birthDate.getDate();

    // getting birth month's value
    let birthMonth = birthDate.getMonth() +1;

    // getting birth Year
    let birthYear = birthDate.getFullYear();

    // getting current date
    let currentDate = new Date();

    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth() +1;
    let CurrentYear = currentDate.getFullYear();

    // declaring final values to show
    let months, days;

    // total years
    let years = CurrentYear-birthYear;

    if (currentMonth >= birthMonth) {
        // total months
        months = currentMonth-birthMonth;
    }
    else{
        // reduce years value by 1
        years--;
        months = 12 + currentMonth - birthMonth;
    }

    if (currentDay >= birthDay) {
        // total days
        days = currentDay-birthDay;    
    }
    else{
        // reduce month by 1
        months--;
        days = getDaysInMonth(birthYear, birthMonth) + currentDay - birthDay;
    } 
    
    // if months value is negative
    if ( months< 0) {
        months = 11;
        years--;
    }
    result.innerHTML = `You are ${days} ${pluralize('day', days)}, ${months} ${pluralize('month', months)} and ${years} ${pluralize('year', years)}`;
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate(); 
}

function pluralize(word, count) {
    // we are assuming that word will always come in a singular form
    if (count == 1) return word

    // we are also assuming that the plural version of the word will just need an 's' suffix
    return `${word}s`
}
