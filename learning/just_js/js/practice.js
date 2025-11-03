// Задание №1
const name = prompt("Как тебя зовут?")
console.log(`Привет, ${name}!`);

// Задание №2
const age = +prompt("Сколько тебе лет?")
console.log(`Через 5 лет тебе будет ${age + 5}!`);

// Задание №3
const string_name = "This is a string";
const number_name = 42;
const boolean_name = true;
const null_name = null;
const undefined_name = undefined;
const object_name = { key: "value" };
const power = 99999n
const symbol_name = Symbol("id");

console.log(
   typeof string_name,
   typeof number_name,
   typeof boolean_name,
   typeof null_name,
   typeof undefined_name,
   typeof object_name,
   typeof power,
   typeof symbol_name
   
);

// Задание №4
const numFirst = +prompt("Введи первое число")
const numSecond = +prompt("Введи второе число")

console.log(
   numFirst + numSecond,
   numFirst - numSecond,
   numFirst * numSecond,
   numFirst / numSecond,
   numFirst % numSecond,
   Math.pow(numFirst, numSecond)
);

// Задание №5
const wordFirst = prompt("Введи первое слово")
const wordSecond = prompt("Введи второе слово")

console.log(wordFirst + wordSecond);

