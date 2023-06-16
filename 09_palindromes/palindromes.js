const palindromes = function (str) {
    let lowerStr = str
        .toLowerCase()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
        .replace(/\s/g, "");
    
    let reverseStr = lowerStr.split('').reverse().join('');

    return reverseStr === lowerStr;
};


// Do not edit below this line
module.exports = palindromes;
