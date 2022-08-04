//operator functions
function add(a, b) {
    return parseFloat(a) + parseFloat(b);
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
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1,num2);
    } else if (operator === '*') {
        return multiply(num1,num2);
    } else if (operator === '/') {
        return divide(num1,num2);
    }
};

let displayContainer = document.querySelector('#display-container');
let firstDisplay = document.querySelector('#first-number');
let equals = document.querySelector('#equals');
let answer = document.querySelector('#answer');
let clear = document.querySelector('#clear');
const numbers = document.querySelectorAll('button.number');

firstDisplay.textContent = 0;

//function that changes the display when a button is clicked
function firstOutput() {
            if (firstDisplay.textContent == 0) {
                firstDisplay.textContent = "";
                firstDisplay.textContent += this.textContent.trim();
            }
            else {
                firstDisplay.textContent += this.textContent.trim();
            }
        return;}

//function that displays the second number
function secondOutput() {
    firstDisplay.textContent = "";
    firstDisplay.textContent += this.textContent.trim();
}


//converts nodelist into an array
numberArray = Array.from(numbers);
numberArray.forEach(
       button => button.addEventListener('click',firstOutput)
);

//makes the operator buttons functional
let operators = document.querySelectorAll('button.operator');
operatorArray = Array.from(operators);
operatorArray.forEach(
    operator => operator.addEventListener('click', storeEandO)   
);

//comment
//storing each number in an object
function storeEandO() {
    if(Number.isInteger(storage["firstNumber"])){
        doMath();
        storage["operator"] = this.textContent

    } else{
    storage["operator"] = this.textContent;
    storage["firstNumber"] = parseInt(firstDisplay.textContent);
    numberArray.forEach(
        button => button.addEventListener('click',secondOutput)
);
}
}

//equal button solves math problem involving multiple numbers
equals.addEventListener('click',doMath)

function doMath() {
    //if user divides by 0, display an error message
    storage["secondNumber"] = parseInt(firstDisplay.textContent);
    if ((storage["secondNumber"]) == 0 && (storage["operator"] == "/")) {
        firstDisplay.textContent = "ERROR";
    } else if(storage["operator"] == "") {
        return;
    }
    else {
        storage["answer"] = operate(storage["operator"],storage["firstNumber"],storage["secondNumber"]);
        //storage["firstNumber"] = solution;
        evaluate();
    }
    
}


//clear button clears the display and resets the storage
clear.addEventListener('click',clearDisplay)

function clearDisplay() {
    firstDisplay.textContent = "0";
    storage["operator"] = "";
    storage["firstNumber"] = "";
    storage["secondNumber"] = "";
}

function evaluate() {
    firstDisplay.textContent = storage["answer"];
    storage["operator"] = "";
    storage["firstNumber"] = storage["answer"];
    storage["secondNumber"] = "";
}

//stores numbers and operator
let storage = {
    firstNumber : "",
    secondNumber : "",
    operator : "",
    answer : ""
};








