console.log('proverka')
console.log('bb')

// let - динамически меняется
// const - не можем переназначить
let a // declaration
a = 12 // initialization
console.log(a)

// const secondVariable;
// secondVariable = 'poka'

// Область видимости
// локальная глобальная
// функциональная видимость и блочная
// функциональная все что внутри внутри функции
// блочная все что внутри фигурных скобок

// let и const - БЛОЧНАЯ ОБЛАСТЬ ВИДИМОСТЬ
var product = 3

if (true) {
  // у var НЕТ блочной области видимости,
  // у нее только функциональная
  var product = 1 // переменная перезаписывается
}

console.log(product)

function show() {
  var showVaribale = 2
}

console.log(showVaribale)

let user = 2

if (true) {
  let user = 1
}

console.log(user) // результат строчки

// использовать CONST как можно чаще

// index = i
// array = arr
// object = obj
// event = e

// hoisting
console.log(b) // undefined
var b = 12
console.log(b)

console.log(c) // reference error
let c = 12
console.log(c)

// ТИПЫ ДАННЫХ
// понять какой тип данных и какая структура данных
// переиспользовать до источника
// правильно отобразить

// Примитивы - 7
const number = 4
const str = 'hello'
const bool = true
const nullish = null // явно задаем, что ничего нет
const undef = undefined // возвращается если нет return у функции
// пытаемся обратиться к переменной но ее не существует

const symb = Symbol()
const hugeOctal = BigInt('0o377777777777777777')

// ссылочные объекты
// array object function
// все сложные типы данные - объекты
const arr = [1, 2, 3]
console.log(typeof arr)

function sum(a, b) {
  return a + b
}

console.log(typeof sum) //  функция это "специальный объект"

const prom = new Promise((resolve) => resolve('aa'))
console.log(typeof prom)

const date = new Date()
console.log(typeof date)

// primitive vs object(ссылочные)
let number = 4
number = 'string'
console.log(number)

const number1 = '4'

console.log(Number(number1) === number)

console.log(false === [])
// [] falsy value
// операторы сравнения
// == нестрогое приводит типы
// === без приведения типов / строгое
// результат сравнения true/false

const arr = [1, 2, 3]
const newArr = arr // копирую внутренности
newArr[0] = 5
console.log(newArr)
console.log(arr)

const arr1 = [1, 2, 3]
console.log(arr === arr1) // false

// примитивы сравниваются по значению
// ссылочные типы(обхекты, массивы, функции) сравниваются по ссылке в памяти

const obj = { a: 1 }
const obj1 = { a: 1 }
console.log(obj === obj1) // сравнивается по ссылке в памяти

function sum(a, b) {
  return a + b
}

function sum1(a, b) {
  return a + b
}
console.log(sum === sum1) // сравнивается ссылка
console.log(typeof sum)
console.log(typeof 1)
console.log(typeof '1')
console.log(typeof undefined)
console.log(typeof false)

// typeof возвращает тип данных
const arr1 = [1, 2, 3]
console.log(typeof arr1)
const obj = { a: 1 }
console.log(typeof obj)
console.log(typeof {})

// встроенная ошибка JS
console.log(typeof null) // BUG

// Что такое массив?
const ourArray = [4, 'hello', true, false, undefined, null, [1, 2, 3], { user: 'Ivan' }]
// iteration - итерация
ourArray[0] // тиндекс первого элемента - 0
console.log(ourArray.at(1))
console.log(ourArray.at(-1))
// первый с конца
// at - использует отриц величины
// довольно
console.log(ourArray[ourArray.length - 1])
console.log(ourArray.at(-1))

const arrayOfStudents = [2, 4, 6]
// for of для итерации по массивам
// после let - элемент
let sum = 0
// к элементам
for (let el of arrayOfStudents) {
  console.log(el)
  sum += el
}
// array - element - index
// array[index] = element
console.log(sum / arrayOfStudents.length)

const arrayOfStudents = [2, 4, 6]
for (let i = arrayOfStudents.length - 1; i >= 0; i--) {
  console.log(`index: ${i}; number: ${arrayOfStudents[i]} `)
}

// функции
// function declaration / function expression / arrow function

// HOISTING / ПОДНЯТИЕ
b // undefined
var b

sayHello() //работает перед объявлением функции
// Function declaration
function sayHello() {
  console.log('Hello')
}

// function expression
// присваивается переменной
sayBye()

const sayWhy = function () {
  console.log('Why')
}

// a, b параметры
// declaration

// return возвращает значение
// если нет return - undefined
// вызов 2, 3 аргументы
console.log(sum(2, 3))
console.log(sum(10, 30))
console.log(sum(100, 300))

function genId() {
  return Date.toString()
}
console.log(genId())
console.log(genId())
console.log(genId())

const sayBye = () => console.log('Bye')

function sum(a, b) {
  return a + b
}

// const anotherSum = function (a, b) {
//   return a + b
// }
// function expression --> arrow function
const anotherSum = (a, b) => a + b
setTimeout(() => console.log('hi'), 1000)
console.log(anotherSum(2, 3))

const arrayOfStudents = [2, 4, 6]
arrayOfStudents.forEach((el) => console.log(el))
