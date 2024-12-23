function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString2('mature'));

function reverseString2(str) {
    return str.split('').reverse().join('');
}
