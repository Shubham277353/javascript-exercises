const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let sum = 0;
  array.forEach((num) => {
    sum += num;
  });
  return sum;
};

const multiply = function (arr) {
  let mul = 1;
  arr.forEach((num) => {
    mul *= num;
  });
  return mul;
};

const power = function (a, b) {
  let pow = 1;
  for (let i = 0; i < b; i++) {
    pow *= a;
  }
  return pow;
};

const factorial = function (a) {
  let factorial = 1 ;
  for (let i = a ; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
