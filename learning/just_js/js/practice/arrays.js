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

const nums = [10, 20, 30, 40, 50]
console.log([...nums].slice(0,3))

const newNums = [1, -5, 3, 0, -2, 8];

console.log(newNums.filter(
	(number) => number >= 0
))

const people = [
	{name: 'Alex', age: 20},
	{name: 'Mike', age: 30}
]

console.log(
	people.map(
		(user) => user.name
	)
)

const ages = [12, 16, 18, 22]

console.log(ages.includes(18))

const users = [
	{name: 'Alex', city: 'Moscow'},
	{name: 'Bob', city: 'Kazan'},
]

console.log(users.find(
	(user) => user.city === 'Moscow'
))

const anotherNums = [10, 50, 200, 150]

console.log(anotherNums.findIndex(
	(number) => number >= 100
))

const tiredNums = [1, 2, 3, -1]

console.log(
	tiredNums.every(
		(number) => number >= 0
	)
)

const logs = [
	{error: false},
	{error: true},
	{error: false}
]

console.log(
	logs.some(
		(log) => log.error === true
	)
)

const frNums = [10, 20, 30]

console.log(
	frNums.reduce(
		(sum, current) => sum + current, 0
	)
)

const numsToSort = [5, -1, 10, 2]

console.log([...numsToSort].sort(
	(a, b) => a - b
))