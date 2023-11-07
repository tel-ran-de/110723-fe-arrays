const form = document.querySelector('form') // по тегу
const root = document.querySelector('#root') // по id #
const container = document.querySelector('.container') // по классу .
const button = document.querySelector('button[type="submit"]') // по атрибуту
const btnClick = document.querySelector('#click')
const nameInput = document.querySelector('#name')
const ageInput = document.querySelector('#age')
const agreeBox = document.querySelector('#agree')

const userArray = [] // массив объектов

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const user = {
    name: nameInput.value,
    age: ageInput.value,
  }
  userArray.push(user)

  nameInput.value = ''
  ageInput.value = ''

  console.log(userArray)
})

agreeBox.addEventListener('change', (event) => {
  event.target.checked ? (button.disabled = false) : (button.disabled = true)
})

btnClick.addEventListener('click', (event) => {
  console.log(event)
})

// nameInput.addEventListener('input', (event) => {
//   console.log(event.target.value)
// })

// специальная функция, которая следит на событием
// слушает = следит за событием
// когда событие происходит
// выполняется второго аргумента
