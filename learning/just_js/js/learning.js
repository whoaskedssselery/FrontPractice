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

// Урок №5: 