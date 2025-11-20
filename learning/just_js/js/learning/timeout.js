// setTimeout

// Принимает два аргумента: функцию и delay
const timer = setTimeout(() => console.log('Hello from the future'), 200)

// Отмена setTimeout

clearTimeout(timer)

function greeting (name) {
	console.log(`Привет, ${name}`)
}

// Если функции нужны параметры, то их нужно указывать после delay, через запятую
setTimeout(greeting, 1000, 'ssselery')

// нулевая задержка (по умолчанию) всегда будет >= 4ms, любой такой таймаут выведется позже простых логов

// setInterval

const who =	setInterval(() => console.log('Кто там?'), 1000)

setTimeout(() => {
	clearInterval(who)
}
	, 5000)