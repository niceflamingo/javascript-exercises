function add(num1, num2) {
 let sum = (num1 + num2)
  return sum
}

function subtract(num1, num2) {
  let sum = (num1 - num2)
  console.log(sum);
  return sum
}

function sum(arr) {
  let sum = 0

  arr.forEach(x => {
    sum += x;
  })
  
  return sum
}

function multiply(arr) {
  let sum = 1

  arr.forEach(x => {
    sum *= x;
  })

  return sum
}

function power(num1, num2) {
  let sum = (Math.pow(num1, num2))

  return sum
}

function factorial(Number) {
if (Number === 0 || Number === 1)
    return 1;
    for (let i = Number - 1; i >= 1; i--) {
      Number *= i;
    }
    return Number
}



// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
