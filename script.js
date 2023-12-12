let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";

function updateDisplay(value) {
    document.getElementById("display").textContent = value;
}

function appendNumber(number) {
    if (operator === "") {
        firstNumber += number;
        updateDisplay(firstNumber);
    } else {
        secondNumber += number;
        updateDisplay(secondNumber);
    }
}

function setOperator(op) {
    if (firstNumber !== "") {
        operator = op;
        updateDisplay(firstNumber + " " + operator);
    }
}

function calculate() {
    if (operator !== "" && secondNumber !== "") {
        result = eval(firstNumber + operator + secondNumber);
        updateDisplay(result);
        firstNumber = result.toString();
        secondNumber = "";
        operator = "";
    }
}

function clearDisplay() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    result = "";
    updateDisplay("0");
}
