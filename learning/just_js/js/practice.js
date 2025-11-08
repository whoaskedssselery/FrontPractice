const sayHello = (name) => {
   console.log(`Hello, ${name}!`);
}

function add(num1, num2) {
   console.log(num1 + num2);
}

const power = function(base, exp) {
   console.log(Math.pow(base, exp)); // или base**exp
}

const isStringLong = (string) => {
   console.log(string.length > 10 ? true : false);
}

const combineWords = (word1, word2, separator = " ") => {
   console.log(word1.concat(separator, word2));
}

const getEvenNumbers = (from, to) => {
   let array = []
   for (let i = from; i <= to;i++) {
      if (i % 2 != 0) continue
      array.push(i)
   }

   console.log(array);
}

sayHello("ssselery")
add(2, 3)
power(2, 3)
isStringLong("helloworld!")
combineWords("Hello", "World", ", ")
getEvenNumbers(1, 18)