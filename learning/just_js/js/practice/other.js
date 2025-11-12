// Задание 1

const product = {
	name: "Mouse",
	price: 1599,
	getPriceWithTax(taxPercent) {
		return this.price * (1 + (taxPercent/100))
	}
};

console.log(product.getPriceWithTax(20)); // 1918.8

// Задание 2

let ladder = {
	step: 0,
	up() {
		this.step++
		if (this.step >= 10) {
			console.log('Выше только бог')
			this.step--
		}
		return this
	},
	down() {
		this.step--
		if (this.step < 0) {
			console.log('Ты уже на Земле!')
			this.step++
		}
		return this
	},
	showStep() {
		console.log("Текущая ступенька: ", this.step);
		return this
	},
}

ladder
	.up()
	.down()
	.showStep()
	.down()
	.showStep()

// Задание 3

// const username = prompt('Введите имя для регистрации: ')
//
// const clearUsername = username.trim().toLowerCase()
//
// if (clearUsername.length === 0) console.log('Ошибка: имя не должно быть пустым!')
// if (clearUsername.length <= 3) console.log('Ошибка: В вашем имени должно быть больше 3 символов!')
// if ((/\d/.test(clearUsername))) console.log('Ошибка: В имени не должно быть цифр!')
//
// console.log('Вы успешно зарегистрировались')

// Задание 4

const maskPhone = (tel) => {
	const mainPart = (tel.slice(0, -5)).replace(/\d/gi, '*')
	console.log(mainPart + tel.slice(-5))
}

maskPhone('+7 (999) 888-77-66')

// Задание 5

const randomRound = (num) => {
	switch (Math.round(Math.random() * 4)) {
		case 1:
			console.log('Округление числа через ceil: ' + Math.ceil(num))
			break
		case 2:
			console.log('Округление числа через floor: ' + Math.floor(num))
			break
		case 3:
			console.log('Округление числа через round: ' + Math.round(num))
			break
		case 4:
			console.log('Округление числа через trunc: ' + Math.trunc(num))
			break
		default:
			console.log('Oops, try again!');
	}
}

randomRound(4.5)