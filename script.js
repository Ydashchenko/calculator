let firstNumber = ''
let secondNumber = ''
let operation = ''

let currentNumber = document.getElementById('current-number')
currentNumber.textContent = '0'

let figures = document.querySelectorAll('.figure')
figures.forEach(figure => figure.addEventListener('click', function(e) {
    if (firstNumber === '') {
        firstNumber = figure.textContent
        currentNumber.textContent = figure.textContent
    } else if (firstNumber !== '' && expression.textContent === '') {
        firstNumber = firstNumber + figure.textContent
        currentNumber.textContent = firstNumber
    } else {
        secondNumber = secondNumber + figure.textContent
        currentNumber.textContent = secondNumber
    }
}))

const point = document.querySelector('.point')
point.addEventListener('click', function(e) {
    if (expression.textContent === '') {
        if (!currentNumber.textContent.includes('.')) {
            currentNumber.textContent += '.'
            firstNumber = currentNumber.textContent
        }
    } else {
        if (!currentNumber.textContent.includes('.')) {
            currentNumber.textContent += '.'
            secondNumber = currentNumber.textContent
        }
    }
})

let expression = document.getElementById('full-expression')
let operations = document.querySelectorAll('.opt-btn')
operations.forEach(operationBtn => operationBtn.addEventListener('click', function(e) {
    if (secondNumber === '') {
        operation = operationBtn.textContent
        expression.textContent = currentNumber.textContent + operationBtn.textContent
        firstNumber = currentNumber.textContent
        secondNumber = ''
    } else {
        operate()
        operation = operationBtn.textContent
        currentNumber.textContent = firstNumber
        expression.textContent = firstNumber + operation
        secondNumber = ''

    }
}))

const equals = document.getElementById('equals')
equals.addEventListener('click', function(e) {
    operate()
    expression.textContent += secondNumber
    expression.textContent += '='
    currentNumber.textContent = firstNumber
    secondNumber = ''

})

function operate() {
    switch (operation) {
        case '+':
            firstNumber = parseFloat(firstNumber) + parseFloat(secondNumber)
            break;
        case '-':
            firstNumber = parseFloat(firstNumber) - parseFloat(secondNumber)
            break;
        case '×':
            firstNumber = parseFloat(firstNumber) * parseFloat(secondNumber)
            break;
        case '÷':
            firstNumber = parseFloat(firstNumber) / parseFloat(secondNumber)
            break;
    }       
}