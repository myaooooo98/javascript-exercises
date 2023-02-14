const convertToCelsius = function(temp) {
  let C = (temp - 32) * (5 / 9);
  C = Math.round(C * 10) / 10;      //https://stackoverflow.com/questions/7342957/how-do-you-round-to-1-decimal-place-in-javascript
  return C;
};

const convertToFahrenheit = function(temp) {
  let F = (temp * 1.8) + 32;
  F = Math.round(F * 10) / 10;
  return F;
};

// const convertToCelsius = function(fahrenheit) {
//   return Math.round((fahrenheit - 32) * (5/9) * 10) / 10;
// };

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
