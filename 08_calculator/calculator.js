const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let sum = 0;
	array.forEach(ele => {
    sum += ele;
  });
  return sum;
};

const multiply = function(array) {
  let result = 0;
  array.forEach(ele => {
    result *= ele;
  });
  return result;
};

const power = function(a, b) {
	return a ^ b;
};

const factorial = function(n) {
  let result = 0;
	for (let i = 1; i >= n; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
