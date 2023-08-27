// 001 reverse words
let words = 'this is mine!';
function reverseWords(str) {
    str = str.split(' ').reverse().join(' ');
    return str; // reverse those words
}

reverseWords(words);
// besr result

// function reverseWords(str){
//     return str.trim().split(' ').reverse().join(' '); // reverse those words
//   }

// 002 