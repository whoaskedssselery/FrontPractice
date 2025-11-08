// Задание 1   

const car = {
   brand: "audi",
   year: 2012,
   start: function() {
      console.log(`Машина ${this.brand} заведена`);
   }
}

car.owner = "dad"
delete car.year

for (let key in car) {
   console.log(key, car[key]);
}

// Задание 2

const hasKey = (obj, key) => key in obj;

const obj = { name: "Боб"}

console.log(hasKey(obj, "name"),);

// Задание 3

const student = {
  name: "Alex",
  age: 21,
  info: { university: "MSU", year: 3 }
}

const newStudent = structuredClone(student)

newStudent.info.university = "RTU MIREA"

console.log(student.info.university);

// Задание 4

const compareUsers = (user1, user2) => {
   if (user1?.name === user2?.name && user1?.age === user2?.age) {
      return "Пользователи совпадают";
   }
   return "Ошибка: Разные пользователи";
};


const user1 = {
   name: "Боб",
   age: 42
}

const user2 = {
   name: "Боб",
   age: 42
}

console.log(compareUsers(user1, user2));

// Задание 5

const getAdults = (users) => {
   const result = []; 

   for (let user of users) {
      if (user.age >= 20) { 
         result.push(user); 
      }
   }

   return result;
}

const users = [
  { name: "Alex", age: 25 },
  { name: "Masha", age: 19 },
  { name: "Ivan", age: 31 }
];

console.log(getAdults(users));
