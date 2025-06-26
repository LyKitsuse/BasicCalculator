// Screen
let screen = document.getElementById("output");
let screen2 = document.getElementById("inputScreen");

// Buttons
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const dot = document.getElementById("dot");

const clear = document.getElementById("clear");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const subtract = document.getElementById("subtract");
const add = document.getElementById("add");

const equal = document.getElementById("equal");

let input = "";
let firstInput;
let secondInput;
let operand;

let firstNum = false;
let operandUsed = false;
let dotUsed = false;

document.addEventListener('keydown', ({key}) => {
  if(event.key === "Backspace"){
    if(!(input.length < 2)){
        input = input.slice(0, -1);
        screen.textContent = input;
    }
  }
});



// Number Interaction
one.onclick = () => {
    input += "1"
    screen.textContent = input;
}

two.onclick = () => {
    input += "2"
    screen.textContent = input;
}

three.onclick = () => {
    input += "3"
    screen.textContent = input;
}

four.onclick = () => {
    input += "4"
    screen.textContent = input;
}

five.onclick = () => {
    input += "5"
    screen.textContent = input;
}

six.onclick = () => {
    input += "6"
    screen.textContent = input;
}

seven.onclick = () => {
    input += "7"
    screen.textContent = input;
}

eight.onclick = () => {
    input += "8"
    screen.textContent = input;
}

nine.onclick = () => {
    input += "9"
    screen.textContent = input;
}

zero.onclick = () => {
    input += "0"
    screen.textContent = input;
}

dot.onclick = () => {
    if(!dotUsed){
        input += ".";
        dotUsed = true;
        screen.textContent = input;
    }
    
}

// Clear
clear.onclick = () => {
    input = ""
    operandUsed = false;
    dotUsed = false;
    firstInput = "";
    screen.textContent = "0";
    screen2.textContent = "";
    operand = "";
}

// Operations
add.onclick = () => {
    if(!operandUsed){
        operandUsed = true;
        dotUsed = false;
        firstInput = input;
        input = "";
        screen.textContent = "";
        screen2.textContent = firstInput + " +";
        operand = "+";
    }
}

subtract.onclick = () => {
    if(!operandUsed){
        operandUsed = true;
        dotUsed = false;
        firstInput = input;
        input = "";
        screen.textContent = "";
        screen2.textContent = firstInput + " -";
        operand = "-"
    }
}

multiply.onclick = () => {
    if(!operandUsed){
        operandUsed = true;
        dotUsed = false;
        firstInput = input;
        input = "";
        screen.textContent = "";
        screen2.textContent = firstInput + " x";
        operand = "x"
    }
}

divide.onclick = () => {
    if(!operandUsed){
        operandUsed = true;
        dotUsed = false;
        firstInput = input;
        input = "";
        screen.textContent = "";
        screen2.textContent = firstInput + " /";
        operand = "/"
    }
}

equal.onclick = () => {
    if((operate(operand, firstInput, input))){
        screen.textContent = operate(operand, firstInput, input);
        screen2.textContent = firstInput + "" + operand + "" + input;
        input = operate(operand, firstInput, input);
    } else {
        screen.textContent = "Math Error";
        screen2.textContent = firstInput + "" + operand + "" + input;
    }
    operandUsed = false;
    dotUsed = false;
}

// Main Operate
function operate(operand, a, b){
    switch(operand){
        case "+":
            return parseFloat(a) + parseFloat(b);
            break;
        case "-":
            return parseFloat(a) - parseFloat(b);
            break;
        case "x":
            return parseFloat(a) * parseFloat(b);
            break;
        case "/":
            return parseFloat(a) / parseFloat(b);
            break;
        default:
            break;
    }
    
}