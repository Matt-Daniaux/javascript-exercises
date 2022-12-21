const convertToCelsius = function(f) {
  return Number(((f-32)*5/9).toFixed(1))
};
//(F-32)*(5/9) = c
const convertToFahrenheit = function(c) {
  return Number(((9/5*c)+32).toFixed(1))
};
//(9/5*C)+32 = F
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
