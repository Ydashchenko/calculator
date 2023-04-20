let firstNumber = ''
let secondNumber = ''
let operation = ''
let equalPressed = false

let currentNumber = document.getElementById('current-number')

let clearBtn = document.getElementById('clear')
clearBtn.addEventListener('click', clearFunc)

let deleteBtn = document.getElementById('delete')
deleteBtn.addEventListener('click', function(e) {
  currentNumber.textContent = currentNumber.textContent.toString().slice(0, -1)
})

function clearFunc () {
    firstNumber = ''
    secondNumber = ''
    operation = ''
    currentNumber.textContent = '0'
    expression.textContent = ''
}


let figures = document.querySelectorAll('.figure')
figures.forEach(figure => figure.addEventListener('click', function(e) {
  if (currentNumber.textContent === '0') {
    currentNumber.textContent = figure.textContent
  } else if (currentNumber.textContent === '-0') {
    currentNumber.textContent = '-' + figure.textContent
  } else {
    currentNumber.textContent += figure.textContent
  }
}))

let expression = document.getElementById('full-expression')
let operations = document.querySelectorAll('.opt-btn')
operations.forEach(operationBtn => operationBtn.addEventListener('click', function(e) {
  if (operationBtn.textContent === '-' && currentNumber.textContent === '') {
    currentNumber.textContent += operationBtn.textContent
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

const equals = document.getElementById('equals')
equals.addEventListener('click', function(e) {

})


function operate() {

}

document.addEventListener('keydown', (event) => {
    if(!isNaN(event.key) && event.key !== ' '){
		document.getElementById(`figure-${event.key}`).click()
	}
	if (['/', '+', '-', '*'].includes(event.key)) {
        document.getElementById(`${event.key}`).click()
	}
	if (event.key === 'Backspace' || event.key ==='c' || event.key === 'C') {
		deleteBtn.click()	
	}
	if (event.key === '=' || event.key === 'Enter') {
		document.getElementById('equals').click()
	}
	if (event.key === '.') {
		point.click()
	}
})

clearFunc()