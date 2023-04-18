let firstNumber = ''
let secondNumber = ''
let operation = ''
let snowBall = ''

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
    operation = operationBtn.textContent
    if (secondNumber == '') {
        expression.textContent = currentNumber.textContent + operationBtn.textContent
        firstNumber = currentNumber.textContent
    } //else {
        //let counting = 
    //}
}))

const equals = document.getElementById('equals')
equals.addEventListener('click', function(e) {
    operate()
    console.log(snowBall)
    expression.textContent += secondNumber
    expression.textContent += '='
    currentNumber.textContent = snowBall

})

function operate() {
    switch (operation) {
        case '+':
            snowBall = parseFloat(firstNumber) + parseFloat(secondNumber)
            break;
        case '-':
            snowBall = parseFloat(firstNumber) - parseFloat(secondNumber)
            break;
        case '×':
            snowBall = parseFloat(firstNumber) * parseFloat(secondNumber)
            break;
        case '÷':
            snowBall = parseFloat(firstNumber) / parseFloat(secondNumber)
            break;
    }       
}