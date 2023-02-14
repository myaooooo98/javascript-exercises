const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    }

    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2);
    let sum = 0;
    for (start; start <= end; start++){
        sum += start;
    }
    return sum;
};

//   if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
//   if (min < 0 || max < 0) return "ERROR";
//   if (min > max) {
//      const temp = min;
//      min = max;
//      max = temp;
//   }


// Do not edit below this line
module.exports = sumAll;
