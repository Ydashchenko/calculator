let firstNumber = ''
let secondNumber = ''
let operation = ''

let currentNumber = document.getElementById('current-number')

let clearBtn = document.getElementById('clear')
clearBtn.addEventListener('click', clearFunc)

let deleteBtn = document.getElementById('delete')
deleteBtn.addEventListener('click', function(e) {
    if (firstNumber !== '' && expression.textContent === '') {
        firstNumber = firstNumber.substring(0, firstNumber.length - 1)
        currentNumber.textContent = firstNumber
    } else {
        secondNumber = secondNumber.substring(0,secondNumber.length - 1)
        currentNumber.textContent = secondNumber
    }
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
    if (secondNumber != '') {
        operate()
        expression.textContent += secondNumber
        expression.textContent += '='
        currentNumber.textContent = firstNumber
        secondNumber = ''
    }    
})


function operate() {
    switch (operation) {
        case '+':
            firstNumber = (parseFloat(firstNumber) + parseFloat(secondNumber)).toFixed(2)
            break;
        case '-':
            firstNumber = (parseFloat(firstNumber) - parseFloat(secondNumber)).toFixed(2)
            break;
        case '×':
            firstNumber = (parseFloat(firstNumber) * parseFloat(secondNumber)).toFixed(2)
            break;
        case '÷':
            firstNumber = (parseFloat(firstNumber) / parseFloat(secondNumber)).toFixed(2)
            break;
    }
    if (firstNumber[firstNumber.length - 1] == 0) {
        firstNumber = firstNumber.substring(0, firstNumber.length - 1)
        if (firstNumber[firstNumber.length - 1] == 0) {
            firstNumber = firstNumber.substring(0, firstNumber.length - 2)
        }
    }
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
    console.log(event)
})

clearFunc()
