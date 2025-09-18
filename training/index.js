let num1 = Number(prompt("Введите число для проверки: "));
console.log((Math.abs(num1) == num1) ? "Число положительное" : "Число отрицательное")

let num2 = Number(prompt("Введите число для проверки: "));
console.log((num2 % 2 == 0) ? "Число четное" : "Число нечетное");

let a = Number(prompt("Введите первое число для проверки: "));
let b = Number(prompt("Введите второе число для проверки: "));
if (a % b == 0)  {
   console.log(`Число ${a} делится на ${b} без остатка`);
} else {
   console.log(`Число ${a} делится на ${b} с остатком: ${a%b}`)
}

const calculator = (num1, num2, operator) => {
   switch(operator) {
      case "+":
         alert(num1 + num2);
         break;
      case "-":
         alert(num1 - num2);
         break;
      case "/":
         alert(num1 / num2);
         break;
      case "%":
         alert(num1 % num2);
         break;
      case "*":
         alert(num1 * num2);
         break;
   }
}

let calcNum = Number(prompt("Введите первое значение: "));
let calcOper = prompt("Введите операцию: ");
let calcNum1 = Number(prompt("Введите второе значение: "));

calculator(calcNum, calcNum1, calcOper);

let summa = Number(prompt("Введите общую сумму к оплате: "));
let percent = Number(prompt("Сколько процентов чаевых вы хотите оставить?: "));

let result = summa/100*percent;
console.log(`Чаевые: ${result}` + "\n" + `Общая сумма к оплате с учетом чаевых; ${summa + result}`);

const min = +prompt("min");
const max = +prompt("max");
alert(Math.floor(Math.random() * max * +(`1${"0".repeat(max - 1)}`)) + min * +(`1${"0".repeat(min)}`));
