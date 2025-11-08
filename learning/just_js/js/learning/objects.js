'use strict'

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
console.log(Object.keys(user));// {'login', 'password', 'changeLogin', 'user-greet'}  

user.info = { // добавление ключа к объекту
   'education-status': "university",
   it: "front-end"
}

console.log(Object.keys(user)); // {'login', 'password', 'changeLogin', 'user-greet', 'info'}

delete user.info // удаление ключа в объекте

console.log(Object.keys(user)); // {'login', 'password', 'changeLogin', 'user-greet'}

const weight = 79
const aged = 19

// добавление уже существующих ключей
user.age = aged
user.weight = weight

console.log(Object.keys(user)); // {'login', 'password', 'changeLogin', 'user-greet', 'age', 'weight'}

console.log('isDeveloper' in user); // false

for (const key in user) {
   console.log(key); // вывод всех ключей объекта
   console.log(user[key]); // вывод всех значений объекта
}

// Объекты в JS #2/2

// Сравнение

const obj1 = { 
   name:'qwerty',
   age: 32,
   address: {
      city: 'Moscow'
   }
   }
const obj2 = { 
   name:'qwerty',
   age: 32,
   address: {
      city: 'Moscow',
   }
   }

console.log(obj1 == obj2); // false

// Функция правильного сравнения

const areObjEqual = (object1, object2) => {
   // массивы ключей
   const keys1 = Object.keys(object1) 
   const keys2 = Object.keys(object2) 

   if (keys1.length != keys2.length) {
      console.log("Объекты разные")
      return;
   }

   for (const value in object1) {
      const value1 = object1[value]
      const value2 = object2[value]
      const areValuesObjects = 
         typeof value1 === 'object' && typeof value2 === 'object'

         if (areValuesObjects) return areObjEqual(value1, value2)
      
         if (value1 !== value2) {
         console.log("Объекты разные")
         return;
      }
   }

   console.log("Объекты равны");
   return;
}

areObjEqual(obj1, obj2)

// Клонирование объектов

const newObj1 = { name: "ssselery"}

const newObj2 = {...obj1} 
const newObj3 = Object.assign({}, obj2)
const mainObj = {...newObj1, ...newObj2, ...newObj3}

const customUser = {
   name: "Александр",
   age: 28,
   address: {
      city: "Moscow",
      zipcode: 123456
   }
}

// Optional Chaining Operator проверяет, есть ли данный объект "address" и есть ли у него ключ city. В случае, если такого объекта не будет -> выведется undefined, а программа продолжит выполняться. Если бы данный оператор отсутствовал, то программа бы выдала ошибку и завершилась
console.log("Город пользователя: ", customUser.address?.city)


const userInfo = {
   name: "Алекс",
   age: 26,
}

const { city : userCity = "не указан"} = userInfo // пример деструктуризации со значением по умолчанию и определенным пользователем названием переменной

console.log("Город пользователя: ", userCity);
