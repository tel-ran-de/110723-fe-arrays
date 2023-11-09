const form = document.querySelector('form') // по тегу
const root = document.querySelector('#root') // по id #

const usersContainer = document.createElement('div')
usersContainer.classList.add('user-container')
root.append(usersContainer)

const userArray = [] // массив объектов

const showUsers = (arr) => {
  arr.forEach((user) => console.log(user))
}

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const user = {
    name: nameInput.value,
    age: ageInput.value,
  }
  userArray.push(user)
  showUsers(userArray) //  ВЫЗОВ ФУНКЦИИ
  nameInput.value = ''
  ageInput.value = ''
})
