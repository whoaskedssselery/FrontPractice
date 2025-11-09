'use strict'

// this в JavaScript

console.log('Глобальный this в javascript:', this); // обращается к Window

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
      this.a = num1,
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