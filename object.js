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
const numbers = [5, 7, 8, 6, 3, 7, 1, 9, 8, 5, 10, 15]
const myElement = numbers.find((element) => (element % 3 && element % 5) === 0)
console.log(myElement)

//ternary
const three = (element) => (typeof element === 'number': 'not number')

console.log(three(6))

// element % 3 === 0 ? element : 'not equal'

// if (element % 3 === 0) {
//     return element
// } else {
//     return 'not equal'
// }

// находим слово которое дина которого равна 4
const words = ['apple', 'banana', 'grapes', 'orange']
const findWord = words.find((element) => element.length === 4)
console.log(findWord)

const books = [
  { title: 'Book 1', author: 'Author A' },
  { title: 'Book 2', author: 'Author B' },
  { title: 'Book 3', author: 'Author C' },
  { title: 'Book 4', author: 'Author Y' },
  { title: 'Book 4', author: 'Author D' },
  { title: 'Book 4', author: 'Author X' },
]

// находим объект у которого автор - 'Author C'
// startsWith()
// 'Author C' ===
const ourElement = books.find((element) => element.author.startsWith('Author Y'))
console.log(ourElement.title)

const author = {
  name: 'JK',
}
console.log('Author C' === 'Author C')

// findIndex

const books = [
  { title: 'Book 1', author: 'Author A' },
  { title: 'Book 2', author: 'Author B' },
  { title: 'Book 3', author: 'Author C' },
  { title: 'Book 4', author: 'Author Y' },
  { title: 'Book 4', author: 'Author D' },
  { title: 'Book 4', author: 'Author X' },
]

const ourElement = books.findIndex((element) => element.author.startsWith('Author E'))

if (ourElement === -1) {
  console.log('book not found')
}
// Если find не находит элемент то он возвращает undefined
// Если findIndex не находит элемент то он возвращает -1

// SORT
// изменяет исходный массив!!
const arrNumber6 = [3, 4, 5, 6, 22, 10, 1, 100, 7, 8, 9]
// a b - два элемента массива
arrNumber6.sort((a, b) => {
  return b - a
}) // либо больше 0 либо меньше
// если результат меньше 0 элемент становится вперед
// если больше ноля то назад
console.log(arrNumber6)

const strings = [
  'apple',
  'banana',
  'cherry',
  'date',
  'elderberry',
  'fig',
  'grape',
  'honeydew',
  'kiwi',
  'lemon',
  'mango',
  'nectarine',
  'orange',
  'peach',
  'quince',
]
strings.sort((a, b) => b.length - a.length)
console.log(strings)

// цена по возрастанию
const arr1 = [
  { id: 1, title: 'велосипед', price: 45000 },
  { id: 5, title: 'cамокат', price: 15000 },
  { id: 2, title: 'сноуборд', price: 20000 },
  { id: 3, title: 'лыжи', price: 22000 },
]

arr1.sort((a, b) => b.price - a.price)
console.log(arr1)

// REDUCE
// принимает колбек функцию, которая выполняет действие над каждым элементом массива
// reduce возвращает значение
// для подсчета суммы элементов
// на первой итерации аккумулятор - первый элемент
// текущее значение будет - второй
// возвращает значение accumulator после последней итерации
// аккумулятор в себе хранит результат  return на каждой итерации
const arrNumber10 = [3, 4, 5, 6, 100, 7, 8, 9]
const min = arrNumber10.reduce((accumulator, currentValue) => {
  console.log('accumulator:', accumulator, 'currentValue:', currentValue)
  return accumulator > currentValue ? accumulator : currentValue
})
// второй параметр - дефолтное значение - подставляется в аккумулятор на первой итерации
console.log(min)

const productsWithMarks = [
  { id: 1, title: 'велосипед', price: 45000, marks: [4, 5, 3, 5] },
  { id: 2, title: 'самокат', price: 15000, marks: [4, 4, 5, 4] },
  { id: 3, title: 'сноуборд', price: 20000, marks: [3, 3, 2, 3] },
  { id: 4, title: 'лыжи', price: 22000, marks: [4, 4, 3, 4] },
]

// spread operator

// accumulator => первая итерация!
// accumulator -> default value (если есть)
// если нет - первое значение в массиве

// accumulator -> след итерации

// currentValue ->  след элемент массива

const products = [
  { id: 1, title: 'велосипед', price: 45000 },
  { id: 2, title: 'самокат', price: 15000 },
  { id: 3, title: 'сноуборд', price: 20000 },
  { id: 4, title: 'скейт', price: 60000 },
  { id: 5, title: 'лыжи', price: 22000 },
]

const min = products.reduce((accumulator, currentValue) => {
  console.log('accumulator', accumulator)
  console.log('currentValue', currentValue)
  // ternary operator
  return accumulator.price < currentValue.price ? accumulator : currentValue

  if (accumulator.price < currentValue.price) {
    return accumulator
  } else {
    return currentValue
  }
})

console.log(min)

const arr = [1, 2, 3]
const secondArr = [4, 5, 6]

const newArr = [...arr, ...secondArr]
console.log(newArr)
// добавить в массив newArr 9 10
const anotherArr = [...newArr, {}, [[], []]]
console.log(anotherArr)

const stringOfNUmbers = '123456'
const toArray = [...stringOfNUmbers]
console.log(toArray)

const authors = [
  { id: 1, name: 'J.K. Rowling' },
  { id: 2, name: 'George Orwell' },
]
const moreAuthors = [
  { id: 3, name: 'Tolkien' },
  { id: 4, name: 'Isaac Asimov' },
]

const allAuthors = [...authors, ...moreAuthors]
console.log(allAuthors)

const movies = [
  { title: 'Inception', year: 2010 },
  { title: 'Interstellar', year: 2014 },
]
const newMovie = { title: 'Dunkirk', year: 2017 }

const allMovies = [...movies, newMovie]

const user = { name: '', age: 1, group: '1105', homework: 'figma' }
// spread operator
const secondUser = { ...user } // поверхностное копирование объектов
secondUser.name = 'Anna'

console.log(firstUser)
console.log(secondUser)

const userData1 = { city: 'Berlin' }
const userData2 = { stack: 'front' }
const allData = { ...userData1, ...userData2 }
console.log(allData)
const dataWithHW = { ...allData, homework: 'array methods' }
console.log(dataWithHW)

// Объединение с одинаковыми свойствами
const objectA = { x: 1, y: 2 }
const objectB = { y: {}, a: 4 }
const obj = { ...objectA, ...objectB }
console.log(obj)
// если объединяются два объекта с одинаковыми ключами,
// то значение перезаписывается

const user = { name: 'Alex', age: 30, group: '1105', homework: 'figma' }
const newUser = { ...user, age: 31 }
console.log(newUser)

// добавить свойство isActive: true
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
]
const newUsers = users.map((user) => ({ ...user, isActive: true }))
console.log(newUsers)

// вернуть новый массив с ценными 0.9
const products = [
  { id: 'p1', name: 'Laptop', price: 1000 },
  { id: 'p2', name: 'Phone', price: 500 },
]

const productsWithDiscount = products.map((product) => ({ ...product, price: product.price * 0.9 }))
console.log(productsWithDiscount)

const allProducts = [
  { id: 1, title: 'велосипед', price: 45000, marks: [4, 5, 3, 5, 4, 5] },
  { id: 2, title: 'самокат', price: 15000, marks: [4, 4, 5, 4, 4, 5] },
  { id: 3, title: 'сноуборд', price: 20000, marks: [3, 3, 2, 3] },
  { id: 4, title: 'лыжи', price: 22000, marks: [4, 4, 3, 4] },
]

const productsWithAverMark = allProducts.map((singleProduct) => {
  const sumMarks = singleProduct.marks.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  )
  const averageMark = sumMarks / singleProduct.marks.length // сумма на количество
  const fixedAverageMark = averageMark.toFixed(1)
  return { ...singleProduct, averageMark: fixedAverageMark }
})
console.log(productsWithAverMark)
