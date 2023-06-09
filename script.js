let firstNumber = ''
let secondNumber = ''
let operation = ''
let operatorPressed = false
let divisionByZero = false
let answer = ''

let currentNumber = document.getElementById('current-number')

let clearBtn = document.getElementById('clear')
clearBtn.addEventListener('click', clearFunc)

let deleteBtn = document.getElementById('delete')
deleteBtn.addEventListener('click', function(e) {
  currentNumber.textContent = currentNumber.textContent.toString().slice(0, -1)
  answer = ''
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
  divisionByZero = false
  if (currentNumber.textContent === '0' || currentNumber.textContent == answer) {
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

  } else if (currentNumber.textContent != '' && currentNumber.textContent != '-' && operatorPressed === false) {
    expression.textContent = `${Number(currentNumber.textContent)}` + operationBtn.textContent
    firstNumber = currentNumber.textContent
    answer = currentNumber.textContent
    operation = operationBtn.textContent
    operatorPressed = true

  } else if (['+' ,'-' ,'×', '÷'].includes(expression.textContent.charAt(expression.textContent.length - 1)) 
  && currentNumber.textContent === '') {
    expression.textContent = expression.textContent.toString().slice(0, -1)
    expression.textContent += operationBtn.textContent
    operation = operationBtn.textContent
    operatorPressed = true

  } else if (firstNumber != '' && currentNumber.textContent != '' && currentNumber.textContent != '-' && operatorPressed === true) {
    secondNumber = currentNumber.textContent
    operate()
    if (divisionByZero) {
      return
    }
    operation = operationBtn.textContent
    expression.textContent = answer + operationBtn.textContent
    firstNumber = answer
    currentNumber.textContent = answer
  }
}))

const point = document.querySelector('.point')
point.addEventListener('click', function(e) {
  if (!currentNumber.textContent.includes('.') && currentNumber.textContent != '') {
    currentNumber.textContent += '.'
  }
})

const equals = document.getElementById('equals')
equals.addEventListener('click', function(e) {
  if (expression.textContent != '' && currentNumber.textContent != '-'
  && currentNumber.textContent != '' && !expression.textContent.includes('=')) {
    secondNumber = currentNumber.textContent
    operate()
    if (divisionByZero) { 
      return
    } else {
      expression.textContent += secondNumber + '='
      firstNumber = answer
      currentNumber.textContent = answer
      operatorPressed = false
    }
  }
})


function operate() {
  firstNumber = Number(firstNumber)
  secondNumber = Number(secondNumber)
  switch (operation) {
    case '+':
      answer = firstNumber + secondNumber
      answer = Math.round(answer * 1000) / 1000
      break
    case '-':
      answer = firstNumber - secondNumber
      answer = Math.round(answer * 1000) / 1000
      break
    case '×':
      answer = firstNumber * secondNumber
      answer = Math.round(answer * 1000) / 1000
      break
    case '÷':
      if (secondNumber == 0) {
        alert("You can't divide by zero!")
        divisionByZero = true
        answer = firstNumber
        currentNumber.textContent = ''
        return
      } else {
        answer = firstNumber / secondNumber
        answer = Math.round(answer * 1000) / 1000
        break
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
})

clearFunc()