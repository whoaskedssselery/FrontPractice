// Задание 1 Вариант 34

class PasswordChecker {
    constructor(password) {
        this._password = password
    }

    isStrong() {
        const hasMinLength = this._password.length >= 8
        const hasDigit = /\d/.test(this._password)
        const hasLetter = /[a-zA-Z]/.test(this._password)

        return hasMinLength && hasDigit && hasLetter
    }
}

let pass1 = new PasswordChecker("12345678")
let pass2 = new PasswordChecker("abcd1234")
let pass3 = new PasswordChecker("qwe")

console.log(pass1.isStrong()) // false (нет букв)
console.log(pass2.isStrong()) // true (8 символов, есть цифры и буквы)
console.log(pass3.isStrong()) // false (мало символов)

// Задание 2 Вариант 18

const transformArray = (arr, callback) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        let newValue = callback(arr[i])
        result.push(newValue)
    }

    return result;
}

const square = (num) => num*num

const numbers = [1, 2, 3, 4, 5]

console.log(transformArray(numbers, square)) // [1, 4, 9, 16, 25]

// Задание 3 Вариант 18

const log = (msg) => {
    const div = document.createElement("div")
    div.textContent = msg
    document.getElementById('log').appendChild(div)
}

const fetchData = (name) => {
    return new Promise(resolve => {
        const delay = Math.random() * 1000 + 500;
        setTimeout(() => {
            resolve(`Данные с ${name}`)
        }, delay)
    })
}

const urls = ["users", "posts", "comments"]

const promises = urls.map(name => fetchData(name))

Promise.all(promises)
    .then(results => {
        log("Все данные получены:");
        results.forEach(r => log(r));
    })
    .catch(err => log(`Ошибка: ${err.message}`));

// Задание 4 Вариант 12

function timeout(promise, ms) {
    const timer = new Promise((_, reject) => {
        setTimeout(() => reject(new Error(`Timeout: ${ms} мс`)), ms);
    });
    return Promise.race([promise, timer]);
}

const request = fetch("https://dog.ceo/api/breeds/image/random")


timeout(request, 2000)
    .then(response => response.json())
    .then(data => log(`Успешно: ${data.message}`))
    .catch(error => log(`Ошибка: ${error.message}`));