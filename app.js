const screen = document.querySelector('#screen')
const buttonContainer = document.querySelector('#buttons-container')

const operations = {
    '=': userResponse,
    'C': clearValue,
    'default': userInput => screen.textContent += userInput,
}

buttonContainer.addEventListener('click', (event) => {
    let userInput = event.target.textContent

    operation = operations[userInput] || operations['default']
    operation(userInput)
})  

function clearValue() {
    screen.innerHTML = ''
}

function userResponse() {
    const data = screen.textContent
        .replace(/x/g, '*')
        .replace(/÷/g, '/')
    const result = eval(data)
    screen.textContent = result == 'Infinity'
        ? 'Error'
        : result
}