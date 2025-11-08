'use strict' // Включение строгого режима

// Урок №1: Введение в JavaScript

console.log("Hello, JavaScript!"); // Вывод сообщения в консоль
/* Комментарии
В несколько строк */

// Урок №2: Переменные в JavaScript

// Объявление переменных
var name1 = "Hello"; // var - устаревший способ объявления переменных
let name2 = "it`s" ; // let - современный способ объявления переменных
const name3 = "JavaScript"; // const - для константных значений

console.log(name1, name2, name3); // Вывод значений переменных

name2 = "dear"; // Изменение значения переменной name2

console.log(name1, name2, name3); // Вывод обновленных значений переменных

// Урок №3: Типы данных в JavaScript

// Всего существует 8 основных типов данных в JavaScript
const string_name = "This is a string"; // Строковый тип данных
const number_name = 42; // Числовой тип данных
const boolean_name = true; // Булевый тип данных
const null_name = null; // Null тип данных
const undefined_name = undefined; // Undefined тип данных
const object_name = { key: "value" }; // Объектный тип данных
const power = 99999n // BigInt тип данных
const symbol_name = Symbol("id"); // Символьный тип данных

console.log(typeof string_name); // Вывод типа данных переменной string_name

// Преобразование типов данных
const boolean_word = true;
console.log(typeof boolean_word); // Вывод типа данных переменной boolean_word

console.log(typeof String(boolean_word)); // Преобразование boolean в string и вывод типа данных
console.log(typeof Number(boolean_word)); // Преобразование boolean в number и вывод типа данных

// Урок №4: Основные операции в JavaScript

// Арифметические операции
const a = 10;
const b = 3;
console.log(a + b); // Сложение
console.log(a - b); // Вычитание
console.log(a * b); // Умножение
console.log(a / b); // Деление
console.log(a % b); // Остаток от деления
console.log(a ** b); // Возведение в степень

// Примеры использования унарного оператора
console.log(-a);
console.log(+a);

// Конкатенация строк
const str1 = "Hello, ";
const str2 = "world!";
console.log(str1 + str2); // Объединение строк

// Приоритет операторов
const resultOfMath = 1 + -2 - 3 * +'4' / 5 ** 2
/*
   1 + -2 - 3 * 4 / 5 ** 2
   1 + -2 - 3 * 4 / 25
   1 + -2 - 12 / 25
   1 + -2 - 0.48
   -1 - 0.48
   -1.48
*/

console.log(resultOfMath);

// Урок №5: Условные операторы в JavaScript

const age = 19;
if (age > 18) console.log("Учи js, скоро на работу!")
else console.log("Начни раньше учить js, потом будет легче найти работу!")

const sth1 = null;
const sth2 = 10;

const res1 = sth1 || sth2; // Проверяет на false значение
const res2 = sth1 ?? sth2; // Проверяет на null или undefined

console.log(res1);
console.log(res2);

// Урок №6: Взаимодействие с пользователем

// Ввод данных от пользователя

/*
   !!Код заккомментирован чтобы не мешать при просмотре консоли браузера!!
   const userName = prompt("Введите ваше имя:", "Имя");
   alert("Привет, " + userName + "!");
*/

// Подтверждение действия пользователя

/*
   !!Код заккомментирован чтобы не мешать при просмотре консоли браузера!!
   const isAdult = confirm("Вам есть 18 лет?");
   if (isAdult) {
      alert("Добро пожаловать на сайт!");
   } else {
      alert("Извините, доступ запрещен.");
   }
*/

// Урок №7: Циклы в JavaScript

// Цикл while

let count = 0;
while (count <= 5) {
   console.log("Count is: " + count);
   count++;
}

// Цикл for

for (count; count <= 10; count++) {
   console.log("Count is: " + count);
}

// Цикл do...while

let newCount = 0;

do {
   console.log("New Count is: " + newCount);
   newCount++;
} while (newCount <= 5);

// Урок №8: Функции в JavaScript #1/2

// Способы объявления функции

// Function Declaration

function greet(name) {
   return "Hello, " + name + "!";
}

console.log(greet("Alice"));

// Function Expression

const farewell = function(name) {
   return "Goodbye, " + name + "!";
};

console.log(farewell("Bob"));

// Arrow Function (лучший способ по моему мнению)

const add = (x, y) => {
   return x + y;
}

console.log(add(5, 3));

// Урок №9: Функции в JavaScript #2/2


// Пример callback (функция внутри функции)
const logMessage = (func1, func2) => {
   func1()
   console.log("Some logs");
   func2();
}

function fn1() {console.log("Stage 1: Complited")}
function fn2() {console.log("Stage 2: Complited")}

logMessage(fn1, fn2)

// Объекты в JS #1/2

const firstObject = {}; // Создание объекта - первый способ 
const secondObject = new Object() // Создание объекта - второй способ

const user = { // Пример объекта, созданы две пары "ключ : значение"
   login: "ssselery",
   password: "unknown",
   changeLogin: function(login) { // использование стрелочной функции определяет this не к телу объекту, а ко всему "каркасу" сайта
      this.login = login
      console.log("Имя успешно заменено");
   },
   'user-greet': function() { // Если ключ содержит пробел или дефис, то его нужно обернуть в кавычки
      console.log(`Привет, ${this.login}`);
   }
}

user.changeLogin("new ssselery");
user["user-greet"](); // обращаться к ключам с пробелом или дефисом нужно в квадратных скобках

// Object.keys показывает все ключи в объекте в формате массива
console.log(Object.keys(user));// ['login', 'password', 'changeLogin', 'user-greet']  

user.info = { // добавление ключа к объекту
   'education-status': "university",
   it: "front-end"
}

console.log(Object.keys(user)); // ['login', 'password', 'changeLogin', 'user-greet', 'info']

delete user.info // удаление ключа в объекте

console.log(Object.keys(user)); // ['login', 'password', 'changeLogin', 'user-greet']

const weight = 79
const aged = 19

// добавление уже существующих ключей
user.age = age 
user.weight = weight

console.log(Object.keys(user)); // ['login', 'password', 'changeLogin', 'user-greet', 'age', 'weight']

console.log('isDeveloper' in user); // false

for (const key in user) {
   console.log(key); // вывод всех ключей объекта
   console.log(user[key]); // вывод всех значений объекта
}

