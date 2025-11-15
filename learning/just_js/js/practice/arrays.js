// Задание 1

const showQueue = (array) => {
	while (array.length > 0) {
		console.log('В очереди сейчас: ', array.length)
		console.log('Просим пройти для обслуживания: ', array.at(0).name, array.at(0).surname)
		
		array.shift()
	}
	
	console.log('В очереди больше никого нет!');
}

const user1 = {
	name: 'John',
	surname: 'Smith'
}

const user2 = {
	name: 'Jane',
	surname: 'Small'
}

const user3 = {
	name: 'Bob',
	surname: 'Oscar'
}

showQueue([user1, user2, user3])

// Задание 2

const frontend = ['HTML', 'CSS', 'JavaScript'];
const backend = ['Node.js', 'Express'];

const fullStack = [...frontend, ...backend]
const copyStack = fullStack.slice()

copyStack.push('React')

console.log('Массив "fullStack":', fullStack)
console.log('Массив "copyStack"', copyStack)

// Задание 3

const words = "apple,banana,orange,grape"

const result = words.split(',').join(' | ')

console.log(result)

// Задание 4

const getLastElement = (arr) => {
	if (arr.length <= 0) {
		console.log('Массив пуст!')
		return
	}
	
	console.log(arr.at(-1));
}

getLastElement([])

// Задание 5

const arrayForTest = [
	'first',
	'second',
	'third',
	'fourth',
]

arrayForTest[10] = 'new element'

for (let value of arrayForTest)
	console.log('Все значения: ', value)

console.log('Кол-во значений в массиве: ', arrayForTest.length)
