'use strict'

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