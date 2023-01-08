const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(obj) {
	let sum = 0;
  obj.forEach(item => {
    sum += item;
  });
  return sum;
};

const multiply = function(obj) { 
  let sum = 1;
  obj.forEach(item => {
    sum *= item;
  });
  return sum;
};

const power = function(a, b) {
  return a ** b
};

const factorial = function(a) {
  let sum = 1;
  for(let i = a; i > 0; i--){
    sum *= i;
  }
	return sum
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
