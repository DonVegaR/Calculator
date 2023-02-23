let display = document.querySelector('.display')
let firstNumber 
let secondNumber 
let operator 
let result 

function addToScreen(char) {
    if (/[0-9+\-*/.]/.test(char)){
        display.value += char
    }
    
}

function deleteChar() {
    let screen = document.getElementById('screen')
    let screenValue = screen.value
    let newScreenValue = screenValue.substring(0, screenValue.length - 1)
    screen.value = newScreenValue
  }

function clearScreen() {
    let screen = document.getElementById('screen')
    screen.value = ''
}

const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => b === 0 ? 'Error: division by zero' : a / b


function operate(operator, a, b) {
    let result
    switch (operator){
        case '+':
            result = add(a, b)
            break
        case '-':
            result = subtract(a,b)
            break
        case '*':
            result = multiply(a,b)
            break
        case '/':
            result = divide(a,b)
            break
        default:
            result = 'invalid operator'
    }
    return result
}

function calculate() {
    let screen = document.getElementById('screen')
    let screenValue = screen.value

    //create an array of element separing the numbers from its operators
    let operations = screenValue.split(/([\+\-\*\/])/)
    //getting the first number to evaluate in index 0 of operation arr
    let result = Number(operations[0])

    for (let i = 1; i < operations.length; i += 2){
        let opStr = operations[i]  // selecting the operator
        let numStr = operations[i + 1] //selectin our 2 number
        let num = Number(numStr) //passin to a integer

        result = operate(opStr, result, num)
    }

    if (result % 1 === 0) {
        // If result is an integer
        screen.value = Math.floor(result).toString(); // Display whole number without decimal places
    } else {
        // If result is a decimal
        screen.value = result.toFixed(2).toString(); // Display with two decimal places
    }
    
}


window.addEventListener('keydown', (event)=>{
    addToScreen(event.key)
    if(event.key === 'Backspace'){
        deleteChar()
    } else if (event.key === 'Enter'){
        calculate()
    } else if (event.key === 'Escape'){
        clearScreen()
    }

})
