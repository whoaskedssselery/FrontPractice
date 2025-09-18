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

// Объекты

// В таком объявлении нет разницы
const exampleObj = {username: "123"};

const anotherObj = new Object();
anotherObj.username =  "123";

// Доступ к полям
console.log(exampleObj.username);
console.log(anotherObj['username']);

// Удаление
delete anotherObj['username'];
console.log(anotherObj);


// Присваивание
const userName = 'Alex'
const userAge = 28;

const userInfo = {
   userName,
   userAge
}
console.log(userInfo);

// И такое возможно
// const propName = prompt('Свойство с каким именем вы хотите добавить в объект');
// const propValue = prompt(`Какое значение записать в ${propName}?`);

// const obj = {
//    [propName]: propValue // Работает только с квадратными скобками
// }

// console.log(obj);

// Проверка на существование поля в объекте
const anotherExample = {
   user: 'god',
   phrase: 'damn',
}

console.log('damn' in anotherExample);

// Перебор полей через for
const newUser = {name: 'Алекс', height: 6.2}
for (const char in newUser) {console.log(char);}


// Сортировка в объектах
const nums = {
   '2': 'Второй',
   '1': 'Первый',
   '3': 'Третий'
}

for (const count in nums) {
   console.log(nums[count]); // вывод будет согласно правилу "1, 2, 3", т.к js в первую очередь будет пытаться привести поля в объекте к отсортированному по возрастанию виду, даже конвертируя строки в число при необходимости
}

// сравнение объектов (Простое сравнение не работает, т.к даже при одинаково пустых объектах они не будут равны, потому что ссылаются на разные ячейки в памяти)

const obj1 = {
   name: 'Алекс',
   height: 6.2,
   nums: {
      '2': 'Второй',
      '1': 'Первый',
      '3': 'Третий'
   }
}

const obj2 = {
   name: 'Алекс',
   height: 6.2,
   nums: {
      '2': 'Второй',
      '1': 'Первый',
      '3': 'Третий'
   }

}

const areTheyEqual = (object1, object2) => {
   if (Object.keys(object1).length !== Object.keys(object2).length) return 'Ваши объекты -> разные'

   for (const key in object1) {
      const value1 = object1[key];
      const value2 = object2[key];

      const areObjects = typeof value1 === 'object' && typeof value2 === 'object' // определяем объекты ли

      if (areObjects) {
         if (!areTheyEqual(value1, value2)) return 'Ваши объекты -> разные'
      } else {
         if (value1 !== value2) return 'Ваши объекты -> разные'
      }
   }

   return 'Ваши объекты -> равны'
}

console.log(areTheyEqual(obj1, obj2));

// Клонирование объектов

// Долгий способ
const testObj = {
   test1: 'hard',
   result1: 'successfully',
}

const copyObj = new Object()

for (const key in testObj) {
   copyObj[key] = testObj[key];
}

console.log(copyObj);

// Простой способ
const testingObj = {
   test2: 'medium',
   result2: 'successfully',
}

const copyingObj = new Object();
Object.assign(copyingObj, testingObj);
console.log(copyingObj);


// Еще более простой способ
const testOnlyObj = {
   test3: 'easy',
   result3: 'successfully',
}

const copyOnlyObj = {...testObj, ...testingObj, ...testOnlyObj}
console.log(copyOnlyObj);

// Note: Если нужно обратиться к полю, которое теоретически существует внутри объекта, и не получить при этом ошибку, нужно использовать ?. при обращении к полю

// Применение
const guest1 = {
   name: 'Василий',
   age: 30,
   orderInfo:
   {
      roomType: 2,
      stayDates: {
         from: '14.04.2024',
         to: '21.04.2024'
      }
   }
}

const guest2 = {
   name: 'Екатерина',
   age: 25
}

const logGuestInfo = (guest) => {
   console.log(
      `Имя: ${guest.name}`,
      `Возраст: ${guest.age}`,
      `Дата выезда: ${guest.orderInfo?.stayDates?.to ?? 'Не указана'}` // ?. Захватывает поле до себя и перед собой, Оператор нулевого слияния работает по принципу первого не "null/undefined" значения
   );
}

logGuestInfo(guest1)
logGuestInfo(guest2)

// Деструктуризация объекта

const example = {
   names: 'Александр',
   ages: 28,
   isDevs: true
}

const {
   names,
   ages,
   isDevs
} = user;

// Деструктуризация в параметрах функции
const logAddress = ({city, street, houseNum, apartNum}) => {
   console.log(
      `
      Адрес:
      г. ${city}, ул. ${street},
      д. ${houseNum}, кв. ${apartNum}
      `
   );
}

logAddress({
   city: "Москва",
   street: "Пушкина",
   houseNum: "Колотушкина",
   apartNum: 42
})

// Деструктуризация с переименованием и значением по умолчанию

const username = {
   name: 'Алекс'
}

const admin = {
   name: 'Босс'
}

const { name : userNaming = 'Не указано' } = username
const { name : adminNaming} = admin

console.log(userNaming, adminNaming);
