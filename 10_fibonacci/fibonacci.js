const fibonacci = function(n) {
    n = parseInt(n);
    if (n < 0) return "OOPS";
    let num1 = 1;
    let num2 = 1;
    let sum;

    for(let i = 3; i <= n; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num2;
};

// Do not edit below this line
module.exports = fibonacci;
