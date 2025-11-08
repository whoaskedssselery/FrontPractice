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
user.age = aged
user.weight = weight

console.log(Object.keys(user)); // ['login', 'password', 'changeLogin', 'user-greet', 'age', 'weight']

console.log('isDeveloper' in user); // false

for (const key in user) {
   console.log(key); // вывод всех ключей объекта
   console.log(user[key]); // вывод всех значений объекта
}