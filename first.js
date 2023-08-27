// 001 reverse words
let words = 'this is mine!';
function reverseWords(str) {
    str = str.split(' ').reverse().join(' ');
    return str; // reverse those words
}

reverseWords(words);

// besr result
function reverseWords(str) {
    return str.trim().split(' ').reverse().join(' '); // reverse those words
}

// 002 

let numbers = 12354445648;
function descendingOrder(n) {
    n = String(n);
    return +n.split('').sort().reverse().join('');
}
console.log(descendingOrder(numbers));
// best result
function descendingOrder(n) {
    return String(n).split('').sort().reverse().join('');
}

// 003 

function squareDigits(num) {

    return +String(num).split('').map(pin => pin * pin).join('');
}

console.log(squareDigits(1235));