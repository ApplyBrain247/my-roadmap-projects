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
    let years, months, days;

    // total years
    years = CurrentYear-birthYear;

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
    result.innerHTML = `You are ${days} days, ${months} months and ${years} years`;
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate(); 
}