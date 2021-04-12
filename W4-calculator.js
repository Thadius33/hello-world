var readlineSync = require("readline-sync");

var firstNum = readlineSync.questionInt("Please enter your first number: ");
var secondNum = readlineSync.questionInt("Please enter your second number: ");
var userOperation = readlineSync.question("Please enter the operation to perform (add, sub, div, mul): ");

function addition(number1, number2){
    return number1 + number2;
}

function subtraction(number1, number2){
    return number1 - number2;
}

function multiplication(number1, number2){
    return number1 * number2;
}

function division(number1, number2){
    return number1 / number2;
}

function calculation(firstNumber, secondNumber, enteredOperation ){
    if (enteredOperation == "add"){
        console.log("Addition of two numbers is: " + addition(firstNumber, secondNumber));
    }
    else if (enteredOperation == "sub"){
        console.log("Subtraction of two numbers is: " + subtraction(firstNumber, secondNumber));
    }
    else if (enteredOperation == "mul"){
        console.log("Multiplication of two numbers is: " + multiplication(firstNumber, secondNumber));
    }
    else if (enteredOperation == "div"){
        console.log("Division of two numbers is: " + division(firstNumber, secondNumber));  
    }
    else console.log("There was an unexpected error. Please try Again!!!");     
}

calculation(firstNum, secondNum, userOperation)


