// Классы в JS

class User {
	#city = 'Moscow' // let, const, var не нужно писать
	// ! Переменную необходимо проинициализировать в классе, чтобы использовать ее в закрытом режиме "#" !
	
	constructor(name = undefined, age = undefined) {
		this.name = name
		this.age = age
	}
	
	set city(value) { // setter присваивает значения через "="
		this.#city = value
	}
	
	get city() { // getter работает как обычный метод
		return this.#city
	}
	
	logInfo() { // Публичный метод
		console.log(`[${this.name}] ${this.age}`)
	}
	
	static greeting() { // Публичный метод с использованием "static", что позволяет обращаться к нему без объявления экземпляра
		console.log('Hello, User!')
	}
	
	#secretLog(city = 'Unknown') { // Метод для использования только внутри класса
		console.log(`[${this.name}] ${this.age} is logged in from ${this.city}`)
	}
}

const ssselery = new User('ssselery', 19)
const newUser = new User()

ssselery.logInfo()
newUser.logInfo()

console.log('Город до:', newUser.city)

newUser.city = 'Rostov'

console.log('Город после:', newUser.city)

// ssselery.secretLog() Вызовет ошибку, т.к метод закрыт для использования вне класса

User.greeting()

// Наследование и переопределение

// Пример наследования
class Developer extends User{
		#isDeveloper() {
			console.log(`${this.name} is developer`)
		}
		
		// Пример переопределения
		logInfo() {
			super.logInfo() // Позволяет за одну строчку сохранить функционал прошлой версии метода
			this.#isDeveloper()
		}
}

const newSsselery = new Developer('ssselery', 20)

newSsselery.logInfo()

