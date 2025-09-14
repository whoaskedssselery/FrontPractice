'use strict' // Не дает использовать неправильно объявленные разработчиком переменные

// node + file - запуск программы в консоли

// Hello, World!
let a = "Привет, "; // базовое объявление переменных, без приколов - "let"
var b = "Мир"; // можно использовать до ее фактического объявления - "var"
const hello = (a,b) => { // невозможно переопределять - "const"
   console.log(a + b);
};
hello(a,b);

let nick = 'ssselery', age = 19, isDev = false; // несколько объявлений через ","

// aged = 10; // // не работает с объявленным 'use strict' на самой первой строчке кода
// console.log(aged);

// Типы данных:
const name = 'ssselery' // string
const favNum = 31 // "number" (float также относится к "number")
const wannaBeDev = true // boolean
const power = 999999999999n // bigInt
const sign = Symbol() // Symbol
const sth = undefined // undefined


const user = { // object
   login: 'ssselery',
   passWd: 'qwerty123'
}
console.log(user.login, user.passWd);

const data = null // null

console.log(typeof(user)); // проверить тип данных - typeof()

// Преобразование

let naming = 'sth'
let aged = 23
console.log(typeof(naming + aged)); // equals string - произошло НЕЯВНОЕ преобразование данных "num to string" для сложения строк

let num1 = "12"
let num2 = "4"
console.log(num1 / num2); // equals 3 - произошло НЕЯВНОЕ преобразование данных "string to num", чтобы воспрроизвести деление

let test = 11;
console.log(typeof(String(test))); // equals string - произошло ЯВНОЕ преобразование данных "num to string"

 console.log(+'1' + +'2');

 // "++ --"
 let count = 10;
 let newCount = ++count;
 console.log(count +'\n'+ newCount); // equals 11 & 11 - т.e значение count в памяти такжк обновилось

 newCount = count++;
 console.log(count +'\n'+ newCount); // equals 12 & 11 - в этом случае newCount принимает count, а уже после этого сам count увеличивается

 // Тернарный оператор
 newCount > 0 ? console.log('Well done!') : console.log('Wrong!');

 // Конструкция if без if
 const number1 = 17;
 const isYoung = number1 < 18;

 isYoung && console.log("Покажите паспорт") // в данном случае если условие до логического И == true, тогда clog выводится, иначе - нет.

 // Убрал, чтобы не мешало при перезагрузке сайта
//  const userAge = +prompt('Сколько тебе лет?') ;
//  alert(`Тебе - ${userAge} лет`);

// Функции

function logHello() // явное "function", можно использовать до фактического объявления в коде
{
   console.log("Hello, Мир!");
}

logHello();

const helloLog = () => console.log("Привет, World!"); // стрелочная функция, нельзя достать arguments как в явном "function"

helloLog()

const func = (copy) => {
   if (copy) {
      return () => console.log(42);
   }

   return () => console.log(13);
}

func(false)() // работает так, потому что внутри функции находится еще одна функция

const sthNew = func(true);
sthNew() // так тоже можно вызвать
