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



// let firstDisplay = document.querySelector('#first-number');
let firstDisplay = document.querySelector('#first-number');
let secondDisplay = document.querySelector('#second-number');
let operator = document.querySelector('#operator');

//function that changes the display when a button is clicked
function firstOutput() {
            firstDisplay.textContent += this.textContent.trim();
            operatorArray.forEach(
                operator => operator.addEventListener('click',end)
            );
}

//function that displays the second number
function secondOutput() {
    secondDisplay.textContent += this.textContent.trim();
}

function end() {
    firstDisplay += '';
}


const numbers = document.querySelectorAll('button.number');
//converts nodelist into an array
numberArray = Array.from(numbers);
numberArray.forEach(
       //button => button.addEventListener('click',firstOutput)
       button => button.addEventListener('click',firstOutput)
);

//makes the operator buttons functional
let operators = document.querySelectorAll('button.operator');
operatorArray = Array.from(operators);
operatorArray.forEach(
    operator => operator.addEventListener('click',storeEandO)
);

//storing each number in an object
function storeEandO() {
    storage["operator"] = this.textContent;
    storage["firstNumber"] = firstDisplay.textContent;
    operator.textContent = storage["operator"]; 
    numberArray.forEach(
        button => button.addEventListener('click',secondOutput)
);
}

let storage = {
}
// let storage = {
//     answer: answer display.textContent
//     firstNumber: display.textContent after operator clicked and resets display
//     secondNumber: display.textContent after clicking equal
//     operator: operator.innerHTML clicked
// }







