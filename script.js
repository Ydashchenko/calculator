let firstNumber = '0'
let secondNumber = null
let operation = ''

let currentNumber = document.getElementById('current-number')
currentNumber.textContent = firstNumber

let figures = document.querySelectorAll('.figure')
figures.forEach(figure => figure.addEventListener('click', function(e) {
    if (firstNumber === '0') {
        firstNumber = figure.textContent
        currentNumber.textContent = figure.textContent
    } else {
        firstNumber = firstNumber + figure.textContent
        currentNumber.textContent = firstNumber
    }
}))

const point = document.querySelector('.point')
point.addEventListener('click', function(e) {
    if (!firstNumber.includes('.')) {
        currentNumber.textContent += '.'
        firstNumber = currentNumber.textContent
    }
})

const expression = document.getElementById('full-expression')
let operations = document.querySelectorAll('.opt-btn')
operations.forEach(operation => operation.addEventListener('click', function(e) {
    if (secondNumber == null) {
        expression.textContent = currentNumber.textContent + operation.textContent
        firstNumber = currentNumber.textContent
    } //else {
        //let counting = 
    //}
}))