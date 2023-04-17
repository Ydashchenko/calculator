let firstNumber = '0'
let secondNumber = 0
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
