// объявляем перменную кот будет константу
// место в памяти и присваеваем значение

// цикл состоит ит трех элемент
// начало условия / конец условия и шаг

// из каких трех элементов состоит массив
// array, element, index
console.log(arr[0] === 1)

// массив принимает любой тип данных в качестве массивов
//примитивы

// ссылочный тип: объект / массив / функция
sum(3, 4)
function sum(a, b) {
  return a + b
}

const result = sum(3, 4)
console.log(result)

// function expression
const multiply = (a, b) => a * b

console.log(multiply(3, 4))

const arr = [1, 2, 3, 4, 5]
// pop / push / shift / unshift
// возвращает последний элемент
// pop() мутирует исходный массив

// console.log(arr.unshift(1))
// console.log(arr)
const arr = [1, 2, 3, 4, 5]
const firstValue = arr.shift() // сдвиг элемент на один вперед
const lastElement = arr.pop() // выталкивание - удалять последний

// оба метода возвращают длину массива
const resultPush = arr.push(8) // заталивает элемент последним значением
const resultUnshift = arr.unshift(10) // добавляем элемент в начало
console.log(resultPush, resultUnshift)
console.log(arr)
// какой метод изменяет исходный массив
// какой метод возвращает новый массив

// callback function
// функция обратного вызова
// функция вызывает другую функцию
// callback - это функция вызывается другой функцией

// я говорю что она будет делать
function sum(a, b) {
  return a + b
}

//setTimeout(sum(3, 3), 300)
//Callback must be a function.

// 1 параметр - функция которая вызывается после истечения таймаута
// handler - обработчик
setTimeout(() => sum(2, 3), 2000)
setTimeout(() => sum(5, 6), 2000)
// setTimeout вызывает внутри себя другую функцию (sum())
// sum - callback для SetTimeout

const arr = [1, 2, 3, 4, 5]
arr.forEach((element, index, array) => console.log(element))

// первый параметр это элемент
// второй параметр - индекс
// третий параметр - массив

// forEach не изменяет исходный массив
// forEach возвращает undefined

// map  возвращает новый массив, а forEach возвращает undefined
// map forEach НЕ меняют исходный массив
const studentsNames = [
  'Aiden',
  'Bella',
  'Cameron',
  'Delilah',
  'Ethan',
  'Fiona',
  'George',
  'Hannah',
  'Ian',
  'Jasmine',
]
const elementsToHtml = (arr) => {
  return arr.map((element, index, array) => `<div>${element}</div>`)
}

const forEachMethod = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array)
  }
}

forEachMethod(words, (el, index) => console.log(el, index))

studentsNames.forEach((element, index, array) => console.log(element))
studentsNames.map((element, index, array) => element)

// выводим длину каждого
const words = ['wrfwef', 'sdfsdf', 'sdfsdfsd', 'sdfsdfds', 'sdfsdf']
const lengthWord = words.map((element) => element.length)
console.log(lengthWord)

// выводим новый массив
// в котором числа умноженны на два
const arrNumber3 = [3, 4, 5, 6, 7, 8, 9]

const newArr = arrNumber3.map((el) => el * 2)
console.log(newArr)
// Вернуть массив у которого все строки с заглавной буквы

// как обратиться к первой букве el[0]
// как ее сделать заглавной
/// .toUpperCase()
// склеить с отсавшейся частью слова
// slice(1) // копирует слово целиком начиная со второй буквы
// el[0].toUpperCase() + el.slice(1)
// Apple Banana
const fruits = [
  'apple',
  'banana',
  'cherry',
  'date',
  'fig',
  'grape',
  'kiwi',
  'lemon',
  'mango',
  'orange', // element.slice(1) = 'range'
]

const arrWithUpperCase = (arr) => arr.map((element) => element[0].toUpperCase() + element.slice(1))

console.log(arrWithUpperCase(fruits))

// FILTER
const arrNumber3 = [3, 4, 5, 6, 7, 8, 9]
// возвращаются те элементы которые соответсвуют условию
const filtredArray = arrNumber3.filter((element) => element % 2 === 0)
console.log(filtredArray)

// фильтруем только числа
const mixedArray = ['apple', 5, 'banana', 10, 'cherry', 15, 'date', 20, 'fig', 25]
// typeof el === 'string' | 'number'
console.log(+mixedArray[1]) // NaN
const onlyNumbers = mixedArray.filter((element) => element === +element)
console.log(onlyNumbers)

// только отриц числа
const numberArray = [5, -3, 10, -7, 15, -12, 20, -25, 30, -35]
console.log(numberArray.filter((el) => el < 0))
// find findIndex sort reduce
