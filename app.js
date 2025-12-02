/*-------------------------------- Constants --------------------------------*/
const numbers = document.querySelectorAll(".button.number");
const operators = document.querySelectorAll(".button.operator");
const equalsButton = document.querySelector(".button.equals");
const clearButton = document.querySelector(".button.clear");
const display = document.querySelector(".display");
display.innerText = "...";

/*-------------------------------- Variables --------------------------------*/

let currentNumber = "";
let previousNumber = "";
let operator = "";
let expressionDisplay = "";

/*----------------------------- Event Listeners -----------------------------*/

// Number buttons
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    const clickedNumber = event.target.textContent;

    currentNumber += clickedNumber;

    expressionDisplay += clickedNumber;
    display.innerText = expressionDisplay;
  });
});

// Operator buttons
operators.forEach((operatorButton) => {
  operatorButton.addEventListener("click", (event) => {
    operator = event.target.textContent;
    previousNumber = currentNumber;
    currentNumber = "";

    expressionDisplay += " " + operator + " ";
    display.innerText = expressionDisplay;
  });
});

// Equals button
equalsButton.addEventListener("click", () => {
  const result = calculateResult(previousNumber, currentNumber, operator);

  display.innerText = result;

  currentNumber = result;
  previousNumber = "";
  operator = "";

  expressionDisplay = result.toString();
});

// Clear button
clearButton.addEventListener("click", () => {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  expressionDisplay = "";

  display.innerText = "";
});

/*-------------------------------- Functions --------------------------------*/

function calculateResult(num1, num2, operator) {
  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);

  switch (operator) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
    case "*":
      return number1 * number2;
    case "/":
      return number1 / number2;
    default:
      return "Invalid operator";
  }
}
