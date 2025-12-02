/*-------------------------------- Constants --------------------------------*/
const numbers = document.querySelectorAll(".button.number"); //querySelectorAll returns a NodeList of all elements in the document that have the specified selector

const operators = document.querySelectorAll(".button.operator"); //querySelectorAll returns a NodeList of all elements in the document that have the specified selector

const equalsButton = document.querySelector(".button.equals"); //querySelector returns the first Element within the document that matches the specified selector, or group of selectors.

const clearButton = document.querySelector(".button.clear"); //querySelector returns the first Element within the document that matches the specified selector, or group of selectors.

const display = document.querySelector(".display"); //querySelector returns the first Element within the document that matches the specified selector, or group of selectors.

/*-------------------------------- Variables --------------------------------*/

let currentNumber = ""; //The currentNumber is equal to an empty string
let previousNumber = ""; //The previousNumber is equal to an empty string
let operator = ""; //The operator is equal to an empty string

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

numbers.forEach((number) => {
  //forEach() method executes a provided function once for each array element.
  number.addEventListener("click", (event) => {
    //addEventListener() method attaches an event handler to the specified element.
    const clickedNumber = event.target.textContent; //textContent property sets or returns the text content of the specified node, and all its descendants.
    currentNumber += clickedNumber; //The += operator adds a value to a variable.
    display.innerText = currentNumber; //The innerText property sets or returns the text content of the specified node, and all its descendants.
  });
});

operators.forEach((operatorButton) => {
  //forEach() method executes a provided function once for each array element.
  operatorButton.addEventListener("click", (event) => {
    //addEventListener() method attaches an event handler to the specified element.
    operator = event.target.textContent; //textContent property sets or returns the text content of the specified node, and all its descendants.
    previousNumber = currentNumber; //The previousNumber is equal to the currentNumber
    currentNumber = ""; //The currentNumber is equal to an empty string
  });
});

equalsButton.addEventListener("click", (event) => {
  //addEventListener() method attaches an event handler to the specified element.
  const result = calculateResult(previousNumber, currentNumber, operator); //The result is equal to the calculateResult function with the arguments previousNumber, currentNumber, and operator
  display.innerText = result; //The innerText property sets or returns the text content of the specified node, and all its descendants.
  currentNumber = result; //The currentNumber is equal to the result
  previousNumber = ""; //The previousNumber is equal to an empty string
  operator = ""; //The operator is equal to an empty string
});

clearButton.addEventListener("click", (event) => {
  //addEventListener() method attaches an event handler to the specified element.
  currentNumber = ""; //The currentNumber is equal to an empty string
  previousNumber = ""; //The previousNumber is equal to an empty string
  operator = ""; //The operator is equal to an empty string
  display.innerText = ""; //The innerText property sets or returns the text content of the specified node, and all its descendants.
});

/*-------------------------------- Functions --------------------------------*/

function calculateResult(num1, num2, operator) {
  //The calculateResult function takes in three arguments, num1, num2, and operator
  const number1 = parseFloat(num1); //The parseFloat() function parses a string and returns a floating point number.
  const number2 = parseFloat(num2); //The parseFloat() function parses a string and returns a floating point number.
  switch (
    operator //The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow the matching case.
  ) {
    case "+": //The case clause is a label that can be used by the break or return statements.
      return number1 + number2; //The return statement ends function execution and specifies a value to be returned to the function caller.
    case "-": //The case clause is a label that can be used by the break or return statements.
      return number1 - number2; //The return statement ends function execution and specifies a value to be returned to the function caller.
    case "*": //The case clause is a label that can be used by the break or return statements.
      return number1 * number2; //The return statement ends function execution and specifies a value to be returned to the function caller.
    case "/": //The case clause is a label that can be used by the break or return statements.
      return number1 / number2; //The return statement ends function execution and specifies a value to be returned to the function caller.
    default:
      return "Invalid operator";
  }
}

//  Note breakdown: The code first specifies constants that reference different HTML elements, such as buttons for numbers, operators, equals, and clear, as well as a display area. It then uses querySelectorAll to select all elements with a specific class and querySelector to select the first element with a specific ID or class.

// After that, the code declares variables currentNumber, previousNumber, and operator to keep track of the user's input and the operation to be performed.

// Event listeners are then added to the number and operator buttons. When a number button is clicked, its value is added to the currentNumber variable and displayed. When an operator button is clicked, the operator is set to the clicked operator, previousNumber is set to currentNumber, and currentNumber is reset.

// An event listener is also added to the equals button. When clicked, it calls the calculateResult function with previousNumber, currentNumber, and operator as arguments. The function then calculates the result, displays it, and stores it in the currentNumber variable. The previousNumber and operator variables are reset.

// Another event listener is added to the clear button. When clicked, it resets currentNumber, previousNumber, operator, and the display.

// The calculateResult function takes two numbers and an operator as arguments. It converts the numbers from strings to floats, performs the operation specified by the operator, and returns the result. If the operator is not recognized, it returns 'Invalid operator'.
