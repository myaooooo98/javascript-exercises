const reverseString = function(str) {
    let char = str.split('');
    let reverse = '';
    for (let i = char.length - 1; i >= 0; i--){
        reverse += char[i];
    }
    return reverse;
};

// can do it this way
// const reverseString = function(string) {
//     return string.split('').reverse().join('');
// };

// Do not edit below this line
module.exports = reverseString;
