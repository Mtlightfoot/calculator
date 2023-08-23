// Sum of a, b
function add(a, b) {
    return a + b;
};

// Subtraction of a, b
function subtract(a, b) {
    return a - b;
};

// Multiplication of a, b
function multiply(a, b) {
    return a * b;
};

//Division of a, b
function divide(a, b) {
    return a / b;
};

let firstNumber = '';
let operator = '';
let secondNumber = '';

// A function thats an operator and two numbers and then calls one of the above functions on the numbers.
function operate(firstNumber, operator, secondNumber) {
    switch (operator) {
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "*":
            return multiply(firstNumber, secondNumber);
        case "/":
            return divide(firstNumber, secondNumber);
    }
};