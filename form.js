const form = document.querySelector('form') // по тегу
const root = document.querySelector('#root') // по id #
const nameInput = document.querySelector('#name')
const ageInput = document.querySelector('#age')
const usersContainer = document.createElement('div')
usersContainer.classList.add('user-container')
root.append(usersContainer)

const catImage = document.createElement('img')
catImage.src =
  'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg'
catImage.alt = 'cat'
root.append(catImage)

const userArray = [] // массив объектов

const showUsers = (arr) => {
  usersContainer.innerHTML = ''
  arr.forEach((user) => {
    const userCard = document.createElement('div')
    userCard.classList.add('user-card')
    const userName = document.createElement('h2')
    userName.innerText = user.name
    const userAge = document.createElement('p')
    userAge.innerText = user.age
    userCard.append(userName, userAge)
    usersContainer.append(userCard)
  })
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
