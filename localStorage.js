// сохранять данные в браузере
localStorage.setItem('username', 'vlad')
localStorage.setItem('userAge', 30) // сохраняю возраст в LS

// ПОЛУЧАЕМ ИХ ИЗ LOCAL STORAGE
const age = localStorage.getItem('userAge') // порлучаю возраст из LS
const ageInput = document.querySelector('#age') // получаю input
ageInput.value = age // подставляю в input значение из localStorage

// получить имя из LS
// получаем элемент инпут
// заносим значение из LS в input value

const nameV = localStorage.getItem('username') // порлучаю возраст из LS
const nameInput = document.querySelector('#name') // получаю input
nameInput.value = nameV

const root = document.querySelector('#root')
const counterContainer = document.createElement('div')
let counterValue = localStorage.getItem('counter') || 0
counterContainer.innerText = counterValue
root.append(counterContainer)

const minusButton = document.createElement('button')
minusButton.innerText = 'minus'
root.append(minusButton)

const plusButton = document.createElement('button')
plusButton.innerText = 'plus'
root.append(plusButton)

minusButton.addEventListener('click', () => {
  counterValue--
  localStorage.setItem('counter', counterValue)
  counterContainer.innerText = counterValue
})
plusButton.addEventListener('click', () => {
  counterValue++
  localStorage.setItem('counter', counterValue)
  counterContainer.innerText = counterValue
})
