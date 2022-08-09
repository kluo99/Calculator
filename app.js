let displayContainer = document.querySelector('#display-container');
let firstDisplay = document.querySelector('#first-number');
let equals = document.querySelector('#equals');
let answer = document.querySelector('#answer');
let clear = document.querySelector('#clear');
let decimal = document.querySelector('#decimal');
const numbers = document.querySelectorAll('button.number');
 
firstDisplay.textContent = 0;

//stores numbers and operator
let storage = {
    firstNumber : "",
    secondNumber : "",
    operator : "",
    answer : ""
};

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

//equal button solves math problem involving multiple numbers
equals.addEventListener('click',doMath)

//clear button clears the display and resets the storage
clear.addEventListener('click',clearDisplay)

//decimal appears when clicked 
decimal.addEventListener('click',displayDecimal)


//function that changes the display when a button is clicked
function firstOutput() {
            if (firstDisplay.textContent == "0") {
                firstDisplay.textContent = "";
                firstDisplay.textContent += this.textContent.trim();
            }  else if (firstDisplay.textContent.toString().length >= 10) {
                return;
            }
            else {
                firstDisplay.textContent += this.textContent.trim();
            }
        return;
    }


//checks if number is a float
function isFloat(value) {
    if (
      typeof value === 'number' &&
      !Number.isNaN(value) &&
      !Number.isInteger(value)
    ) {
      return true;
    }
  
    return false;
  }

//storing each number and operator in an object
function storeEandO() {
    if(Number.isInteger(storage["firstNumber"]) || isFloat(storage["firstNumber"]) === true) {
    //if ((Number.isInteger(storage["firstNumber"]) || isFloat(storage["firstNumber"])) && isFloat(parseFloat(storage["secondNumber"]))) {
        doMath2();
        storage["operator"] = this.textContent;
    } else if ((Number.isInteger(storage["secondNumber"]) || isFloat(storage["secondNumber"]) === true)) {
        storage["secondNumber"] = "";    
        storage["operator"] = this.textContent;
        storage["firstNumber"] = parseFloat(firstDisplay.textContent);
        decimal.addEventListener('click',displayDecimal2)
        numberArray.forEach(
        button => button.addEventListener('click',secondOutput)
    );

    }
    else{
        storage["secondNumber"] = "";    
        storage["operator"] = this.textContent;
        storage["firstNumber"] = parseFloat(firstDisplay.textContent);
        decimal.addEventListener('click',displayDecimal2)
        numberArray.forEach(
        button => button.addEventListener('click',secondOutput)
);
}
}

//function that displays the second number
function secondOutput() {
    if(storage["secondNumber"] == "") {
        decimal.addEventListener('click',displayDecimal2)
        firstDisplay.textContent = "";
        firstDisplay.textContent += this.textContent.trim();
        storage["secondNumber"] += this.textContent.trim();

    } 
}

function doMath() {
    //if user divides by 0, display an error message
    if ((storage["secondNumber"]) == 0 && (storage["operator"] == "/")) {
        firstDisplay.textContent = "ERROR";
    } else if(storage["operator"] == "") {
        return;
    }
    else {
        storage["secondNumber"] = parseFloat(firstDisplay.textContent);
        storage["answer"] = operate(storage["operator"],storage["firstNumber"],storage["secondNumber"]);
        evaluate();
        }
}

//stringing together multiple operators and numbers
function doMath2() {
    //if user divides by 0, display an error message
    if ((storage["secondNumber"]) == 0 && (storage["operator"] == "/")) {
        firstDisplay.textContent = "ERROR";
    } else if(storage["operator"] == "") {
        return;
    }
    else {
        storage["secondNumber"] = parseFloat(firstDisplay.textContent);
        storage["answer"] = operate(storage["operator"],storage["firstNumber"],storage["secondNumber"]);
        evaluate();
        storage["firstNumber"] = storage["answer"]; 
        }
}

function clearDisplay() {
    firstDisplay.textContent = 0;
    storage["operator"] = "";
    storage["firstNumber"] = "";
    storage["secondNumber"] = "";
    storage["answer"] = "";
}

function evaluate() {
    if (storage["answer"].toString().length > 10) {
        firstDisplay.textContent = parseFloat(storage["answer"].toString().substring(0 ,9)) + "+";
    } else {
    firstDisplay.textContent = storage["answer"];
    storage["operator"] = "";
    //storage["firstNumber"] = storage["answer"];
    storage["firstNumber"] = "";
    storage["secondNumber"] = "";
}}

function displayDecimal() {
        if (firstDisplay.textContent == "0") {
            firstDisplay.textContent += ".";
            storage["firstNumber"] += "0."
        } else if (firstDisplay.textContent.toString().includes(".")){
            return;
        } else if(firstDisplay.textContent.toString().length >= 10) {
            return;
        }
        else {
        firstDisplay.textContent += this.textContent.trim();
        }
}

function displayDecimal2() {
    if((storage["secondNumber"]) == "") {
        firstDisplay.textContent = "0."; 
        storage["secondNumber"] = "2";
}
}

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