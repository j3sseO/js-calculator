const display = document.getElementById("display");
let isCalculated = false;

function appendToDisplay(input) {
    if (isCalculated && !(input === '+' || input === '-' || input === '*' || input === '/')) {
        display.value = input;
        isCalculated = false;
    } else if (isCalculated && (input === '+' || input === '-' || input === '*' || input === '/')) {
        display.value += input;
        isCalculated = false;
    } else {
        display.value += input;
    }
}

function clearDisplay() {
    display.value = "";
    isCalculated = false;
}

function calculate() {
    try {
        display.value = eval(display.value);
        isCalculated = true;
    } catch (error) {
        display.value = "Error";
    }
}