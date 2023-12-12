document.addEventListener("DOMContentLoaded", function () {
    let display = document.getElementById("display");
    let buttons = document.querySelectorAll("button");

    let currentInput = "";
    let currentOperator = "";
    let firstOperand = null;

    buttons.forEach(button => {
        button.addEventListener("click", handleClick);
    });

    function handleClick(event) {
        const value = event.target.innerText;

        if (!isNaN(parseInt(value)) || value === ".") {
            handleNumber(value);
        } else if (value === "C") {
            clear();
        } else if (value === "=") {
            calculate();
        } else {
            handleOperator(value);
        }

        updateDisplay();
    }

    function handleNumber(value) {
        currentInput += value;
    }

    function handleOperator(operator) {
        if (currentOperator !== "") {
            calculate();
        }

        currentOperator = operator;
        if (firstOperand === null) {
            firstOperand = parseFloat(currentInput);
            currentInput = "";
        }
    }

    function calculate() {
        if (currentInput !== "") {
            const secondOperand = parseFloat(currentInput);
            switch (currentOperator) {
                case "+":
                    firstOperand += secondOperand;
                    break;
                case "-":
                    firstOperand -= secondOperand;
                    break;
                case "*":
                    firstOperand *= secondOperand;
                    break;
                case "/":
                    firstOperand /= secondOperand;
                    break;
            }

            currentInput = "";
            currentOperator = "";
        }
    }

    function clear() {
        currentInput = "";
        currentOperator = "";
        firstOperand = null;
    }

    function updateDisplay() {
        display.innerText = currentInput !== "" ? currentInput : firstOperand !== null ? firstOperand : "0";
    }
});
