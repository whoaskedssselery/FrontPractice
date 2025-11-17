'use strict'

// this в JavaScript

// console.log('Глобальный this в javascript:', this); обращается к Window

const user = {
   name: "Алекс",
   age: 28,
   logThis() {
      console.log('this в теле метода объекта: ', this); // обращается к user
   }
}

const user1 = { name: "Боб1"}
const user2 = { name: "Боб2"}

user.logThis()

// !Примечание: this в стрелочном методе объекта обращается к Window, минуя тело объекта

function logInfo() { // при обычном обращении this обращается к Window
   console.log("this: " ,this);
   console.log("this.name: " ,this.name); 
}

user1.logThis = logInfo
user2.logThis = logInfo 

user1.logThis()
user2.logThis()

// Задача 

let calculator = {
   read(num1,num2) {
      this.a = num1
      this.b = num2
   },
   sum() {
      return this.a + this.b
   },
   mul() {
      return this.a * this.b
   }
}

calculator.read(1, 2)
console.log("Результат суммирования: ", calculator.sum());
console.log("Результат умножения: ", calculator.mul());

// Задача 

let ladder = {
   step: 0,
   up() {
      this.step++
      return this
   },
   down() {
      this.step--
      return this
   },
   showStep() {
      console.log("Текущая ступенька: ", this.step);
      return this
   }
}

ladder
.up()
.up()
.down()
.showStep()
.down()
.showStep()

// Методы примитивов

const price = 99.99

// Округлят число до указанного кол-ва знаков после запятой
const roundedPrice = price.toFixed(0) // 100

console.log("Округленная цена: ", roundedPrice);

// Приведение к строке

let numToString = (12).toString();

console.log("Числовой тип теперь: ", typeof numToString);

// Математика

console.log("Рандомное число от 0 до 12: ", Math.floor(Math.random()*12));

console.log("Модуль числа -12: ", Math.abs(-12)); // 12

// Округление

console.log("Округление 4.4 через round: ", Math.round(4.4)); // 4
console.log("Округление 4.5 через round: ", Math.round(4.5)); // 5
console.log("Округление -4.6 через round: ", Math.round(-4.6)); // -5

console.log("Округление 4.9 через floor: ", Math.floor(4.9)); // 4
console.log("Округление 4.1 через floor: ", Math.floor(4.1)); // 4
console.log("Округление -4.1 через floor: ", Math.floor(-4.1)); // -5

console.log("Округление 4.1 через ceil: ", Math.ceil(4.1)); // 5
console.log("Округление 4.9 через ceil: ", Math.ceil(4.9)); // 5
console.log("Округление -4.1 через ceil: ", Math.ceil(-4.1)); // -4

console.log("Округление 4.9 через trunc: ", Math.trunc(4.9)); // 4
console.log("Округление -4.9 через trunc: ", Math.trunc(-4.9)); // -4

// Парсинг int

console.log("Парсинг инта в 14px: ", parseInt("-14px")); // 14

// Строки. Методы строк

console.log("Длина строки: ", "someData".length); // 8

const someName = 'Алекс'

console.log(`4-ья буква в Имени ${someName} - ${someName[3]}`)
console.log(`1-ая c конца буква в Имени ${someName} - ${someName.at(-1)}`)

const someWords = '  гДе-тО таМ!'

console.log(someWords.toLowerCase().trim()) // где-то там!
// ! trim() может убрать только открытые пробелы в самом начале/конце

console.log(`На ${someWords.toLowerCase().trim().indexOf("!")} позиции находится '!'`);
console.log(`В предложении есть символ '-'? ${someWords.toLowerCase().includes('-')}`);

const js = 'JavaScript'
console.log(js.substring(4, 0)) // Java
console.log(js.slice(-6)) // Script
console.log(js.repeat(2)); // JavaScriptJavaScript

const message = 'Я изучаю бэкэнд'

console.log(message) // Я изучаю бэкэнд
console.log(
	message.replace(
		/'бэкэнд'/gi, // g заменяет все, i - для любого регистра, или использовать replaceAll
		'фронтэнд'
	)); //  Я изучаю фронтэнд

const phoneNumber = '+7 (999) 999-99 99'

console.log(phoneNumber.replace(/\d/g, '#')) // +# (###) ###-##-##

console.log("Последние 4 цифры номера:", phoneNumber.split('-')[1])

// Задача

// const value = prompt('Введите ваше имя: ')
//
// const clearValue = value
// 	.trim()
// 	.toLowerCase()
//
// if (clearValue.length === 0)
// 	alert('Ошибка: Имя не может быть пустым!')
//
// if (clearValue.includes('admin'))
// 	alert('Ошибка: Ты не админ!')

// Map

const data = new Map()

data.set('id', '1')
data.set(0, '2')

console.log(data.get(0)) // '2'
console.log(data.get('id')) // '1'

console.log(
	data.has('id') // true
)

data.delete(0)

console.log(data.has(0)) // false

data.clear()

console.log(data.size) // 0

const test = new Map()

test.set('name', 'Александр')
test.set('age', '28')

console.log('keys:', test.keys()) // { name, age }
console.log('values:', test.values()) // { 'Александр, 28' }
console.log('entries:', test.entries()) // { 'name' => 'Александр, 'age' => 28 }

// Set

const set = new Set([1, 2, 2, 2, 3, 5, 4, 5])

console.log(set)

set.add(6)
set.add(7)

console.log(set)

// В остальном set похож на map относительно доступных методов

 // JSON

const someInfo = {
	sth: 'some info',
	number: 24
}

// Преобразования для общения с сервером

const userDataAsString = JSON.stringify(someInfo)

console.log(userDataAsString)

const parsedUserData = JSON.parse(userDataAsString)

console.log(parsedUserData)
