// Задание 1

class Product {
	#discount = 0
	
	constructor(name, price) {
		this.name = name
		this.price = price
	}
	
	getinfo() {
		return `Товар: ${this.name}\nЦена: ${this.price}`
	}
	
	set discount(value) {
		this.#discount = value
	}
	
	get discount() {
		return this.#discount
	}
	
	getFinalPrice() {
		return this.price * (1 - this.#discount / 100)
	}
	
	static compare(product1, product2) {
		if (product1.price < product2.price) {
			return 'Дешевле'
		} else if (product1.price > product2.price) {
			return 'Дороже'
		} else {
			return 'Равны'
		}
	}
}

class DigitalProduct extends Product {
	
	getFinalPrice() {
		if (this.discount < 10) {
			this.discount = 10
		}
		return super.getFinalPrice()
	}
}

const telega = new Product('telega', 20)

console.log(telega.getinfo())

telega.discount = 10
console.log(telega.getFinalPrice())

const smartphone = new DigitalProduct('smartphone', 200)

smartphone.discount = 6

console.log(smartphone.getFinalPrice())

console.log(Product.compare(telega, smartphone))

const cart = [
	new Product("Товар 1", 1500),
	new Product("Товар 2", 500),
	new Product("Товар 3", 2000),
]

console.log(
	cart.reduce((sum, item) => sum += item.price, 0)
)



