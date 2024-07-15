//the four fundamental math functions
let add = (x, y) => x + y;
let subtract = (x, y) => x - y;
let multiply = (x, y) => x * y;
let divide = (x, y) => x / y;

let firstNum = 10234;
let operator = '*';
let secondNum = -42114;

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);

    case "-":
      return subtract(num1, num2);

    case "*":
      return multiply(num1, num2);

    case "/":
      return divide(num1, num2);

    default:
      return "Invalid input in operate function";
  }
}

console.log(operate(operator, firstNum, secondNum));
