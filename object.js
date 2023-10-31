const user = {
  name: 'Alex',
  adress: {
    city: 'Berlin',
    street: 'Strasse',
    building: {
      floor: 4,
      appartement: 34,
    },
  },
  certificated: true,
  age: 40,
  children: null,
  readyForRelocation: undefined,
  stack: ['css', 'html'],
  sayHi: function () {
    console.log('hello')
  },
}
// свойство = ключ : значение
// функция  - метод
const userName = user.name

user.sayHi()

// map forEach исходный массив НЕ изменяют
// map возвращает новый массив
// forEach - возвращает undefined

// отфильтровать числа кратные трем
const numbers = [7, 42, 33, 16, 50, 3, 28, 21, 15, 39]
const filteredNumbers = numbers.filter((el) => el % 3 === 0)
console.log(numbers)
console.log(filteredNumbers)

// отфильтровтаь студентов оценки выше 80
const students = [
  { name: 'John', grade: 85 },
  { name: 'Jane', grade: 78 },
  { name: 'Doe', grade: 90 },
  { name: 'Smith', grade: 76 },
  { name: 'Chris', grade: 81 },
]

const filtredStudents = students.filter((el) => el.grade > 80)
console.log(filtredStudents)

// FIND
// find  - возвращает одно значение
// первое значение слева
// findIndex
const numbers = [5, 7, 8, 6, 3, 7, 1, 9, 8, 5, 10]
const myElement = numbers.find((element) => element % 3 === 0)
console.log(myElement)

const three = (element) => (element % 3 === 0 ? element : 'not equal')

console.log(three(6))

element % 3 === 0 ? element : 'not equal'

if (element % 3 === 0) {
    return element 
} else {
    return 'not equal'
}