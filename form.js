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
})

const productContainer = document.createElement('div')
productContainer.innerText = 'Hello'
root.append(productContainer) // append прикреплет элемент

// создать элемент const sayBye h1
const sayBye = document.createElement('h1')
sayBye.innerText = 'Bye'
sayBye.classList.add('say-bye')

sayBye.classList.add('big-text')
console.log(sayBye.classList)
// add -добавляет remove - удаляет класс
// toggle - позволяет переключать класс
root.prepend(sayBye)
// append в конец
// prepend добавляет в начало
