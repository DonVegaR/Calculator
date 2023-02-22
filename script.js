let display = document.querySelector('.display')
let firstNumber 
let secondNumber 
let operator 
let result 

function addToScreen(char) {
    display.value += char
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

    let operations = screenValue.split(/([\+\-\*\/])/)
    let result = Number(operations[0])
    console.log(result)

    for (let i = 1; i < operations.length; i += 2){
        let opStr = operations[i]
        console.log(opStr)
        let numStr = operations[i + 1]
        let num = Number(numStr)

        result = operate(opStr, result, num)
    }

    screen.value = result
}

