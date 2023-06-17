const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
	return array.reduce(add, 0);
};

const multiply = function(array) {
  return array.reduce((x, y) =>  x * y);
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(x) {
  if(x === 0) {
    return 1;
  }
  let array = [];
  for(let i = 1; i <= x; i++) {
    array.push(i);
  }
  return multiply(array);
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
