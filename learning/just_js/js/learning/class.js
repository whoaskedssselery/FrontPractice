// Классы в JS

class User {
	city = 'Moscow'
	
	constructor(name = undefined, age = undefined) {
		this.name = name;
		this.age = age;
	}
	
	set city(value) {
		this.city = value;
	}
	
	get city() {
		return this.city;
	}
	
	logInfo() {
		console.log(`[${this.name}] ${this.age} is logged in from ${this.city}`);
	}
}

const ssselery = new User('ssselery', 19);
const newUser = new User();

ssselery.logInfo()
newUser.logInfo()

console.log('Город до:', newUser.city)

newUser.city = 'Rostov'

console.log('Город после:', newUser.city)