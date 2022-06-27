function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
}; 

//takes in an operator and two numbers
function operate(operator, num1, num2) {
    if (operator === add) {
        return add(num1, num2);
    } else if (operator === subtract) {
        return subtract(num1,num2);
    } else if (operator === multiply) {
        return multiply(num1,num2);
    } else if (operator === divide) {
        return divide(num1,num2);
    }
};

function buttonOutput() {
    let display = document.querySelector('#display');
    display.textContent += this.textContent.trim();
}

const numbers = document.querySelectorAll(".number");
numberArray = Array.from(numbers);
numberArray.forEach(
    button => button.addEventListener('click',buttonOutput)
);
// function changeDisplay() {
//     display.innerHTML = numbers.innerHTML;
// };




