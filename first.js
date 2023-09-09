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

//004

let pin = [true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true];


function countSheeps(arrayOfSheep) { //функция ищет кол=во ТРУ
    let sheeps = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {

        if (arrayOfSheep[i]) {
            sheeps += 1; //sheeps++
        }
    }
    return sheeps;
}

console.log(countSheeps(pin));

//best
function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
}

//005 проверяет четная или нечетная сумма в массиве

function oddOrEven(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    if ((sum % 2) == 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

//best
function oddOrEven(arr) {
    return arr.reduce((a, b) => a + b, 0) % 2 ? 'odd' : 'even'; //нечет, четное
}


//006 на входе число, а на выходе ты считаешь овечек "1 sheep...2 sheep...3 sheep..."

let countSheep = function (num) {
    let murmur = '';
    for (let i = 1; i <= num; i++) {
        murmur += `${i} sheep...`;
    }
    return murmur;
}

// best и мой не плох а в других пошли методы через массивы  и диструктуризацию(вроде)


//007

