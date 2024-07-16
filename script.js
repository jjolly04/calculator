//the four fundamental math functions
let add = (x, y) => x + y;
let subtract = (x, y) => x - y;
let multiply = (x, y) => x * y;
let divide = (x, y) => x / y;

function findCountOfOperator(str) {
  //used to find num of instances of any operator in display
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (operators.includes(str.charAt(i))) {
      count += 1;
    }
  }
  return count;
}

const operators = "+-x/"; //list of operators used for comparisons later on
const numbers = "1234567890";

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);

    case "-":
      return subtract(num1, num2);

    case "x":
      return multiply(num1, num2);

    case "/":
      return divide(num1, num2);

    default:
      return "Invalid input in operate function";
  }
}

//logic to update the display when a button is pressed
let displayText = "";
const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".on-screen"); //select only the buttons whose actual text should appear on screen (no = or clear)

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (numbers.includes(button.textContent)) {
      displayText += button.textContent;
    } else {
      displayText += " " + button.textContent + " ";
      let countOperators = findCountOfOperator(displayText);

      //if there are more than 1 operations than calculate result of first two numbers first and then display that with the new operator
      if (countOperators > 1) {
        let endOperator = displayText.split(" ").at(-2);

        equalsButton.click();

        displayText += " " + endOperator + " ";
      }
    }

    display.textContent = displayText;
  });
});


const clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", () => {
  displayText = "";
  display.textContent = "";
  firstNum = "";
  operator = "";
  secondNum = "";
});

//add logic for equals button to make result appear on screen
const equalsButton = document.querySelector(".equals");

let firstNum = "";
let operator = "";
let secondNum = "";

equalsButton.addEventListener("click", () => {
  let splitDisplayText = displayText.split(" ");

  if (operators.includes(splitDisplayText.at(-1))) {
    //splice current calculator text into array to input into operate
    splitDisplayText.splice(-2, 2); //chop off end to just get operands and operator
    console.log(splitDisplayText);
  }

  let operatorIndex = 0;

  //get everything before the operator in firstNum and everything after in secondNum
  for (
    operatorIndex;
    operatorIndex < splitDisplayText.length;
    operatorIndex++
  ) {
    if (operators.includes(splitDisplayText[operatorIndex])) {
      break;
    }
    firstNum += splitDisplayText[operatorIndex];
  }

  operator = splitDisplayText[operatorIndex];

  operatorIndex++;

  for (
    operatorIndex;
    operatorIndex < splitDisplayText.length;
    operatorIndex++
  ) {
    secondNum += splitDisplayText[operatorIndex];
  }

  let result = operate(operator, +firstNum, +secondNum);

  displayText = result;
  display.textContent = result;

  //reset for future calculations
  firstNum = "";
  secondNum = "";
});
