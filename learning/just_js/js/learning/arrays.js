// Массивы в js #1/2

// Создание матрицы

const matrix = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8]
]

console.log(
	'Какой элемент находится в матрице по адресу [3][3]: ',
	matrix[2][2]
)

// Добавление рандомно большого в очереди элемента

const array = ['first', 'second', 'last']

array[42] = 'new element'

console.log(array) // ['first', 'second', 'last', empty × 39, 'new element']

// Способы добавить элемент

const emptyArray = []

emptyArray.push('last') // Добавление в конец массива
emptyArray.unshift('pre-last') // Добавление в конец массива

console.log(emptyArray) // ['pre-last', 'last']

// Удаление элементов

emptyArray.pop() // Удаление элемента с конца массива
emptyArray.shift() // Удаление элемента из начала массива

// Преобразование массива в строку

const arrayToShow = [
	'i just wanna',
	'show you',
	'sth'
]

console.log(arrayToShow.join(' '),
	"Тип после преобразования: ",
	typeof arrayToShow.join(' ') // string
	);

// Копирование массивов

const testArray = ['some info']

const newTestArray = [...testArray]

console.log(newTestArray)

newTestArray.pop()

console.log(testArray)

const copy = testArray.slice() // в slice также можно указать индексы начала и конца копирования

console.log(copy)

// Объединение массивов

const totalArray = [...testArray]

totalArray.concat(newTestArray, copy)

console.log(totalArray)

// Массивы в js #2/2

// Деструктуризация

const someArray = ['Алекс', 28]

const [userName, userAge] = someArray

console.log('name:' , userName)
console.log('age:', userAge)

// Перебор элементов

const nums = [1, 2, 3, 4, 5]

// forEach принимает функцию

nums.forEach(
	(number,  index) => {
		console.log('Элемент: ', number)
		console.log('Индекс элемента:',  index)
	}
)

// Нахождение элемента

const prices = [
	100, 200, 300, 400, 555,
	{error: 'NaN'},
	{error: 'Not added yet'}
]

console.log('Какая машина стоит 555?', prices.indexOf(555, 2) + 1)

console.log(
	'Индекс ошибки:',
	prices.findIndex(
		(elem) => (typeof elem === 'object' &&  elem.error === 'NaN') // Вернет индекс если 'true'
	)
)

// Проверка на наличие элемента в массиве

console.log(
	'Есть ли у вас машина за 400? ',
	prices.includes(400)
)

console.log(
	'Есть ли ошибки в ценах?',
	prices.some(
		(price) => price.error === 'NaN'
	)
)

console.log(
	'Все ли цены указаны в формате числа?',
	prices.every(
		(price) => typeof price === 'number'
	)
)

console.log(
	'Лог ошибки:',
	prices.find(
		(elem) => (elem.error)
	)
)

console.log(
	'Лог ошибки:',
	prices.filter(
		(elem) => (elem.error)
	)
)

// Метод Map

const users = [
	{
		name: 'Алекс',
		age: 28,
		city: 'Moscow'
	},
	{
		name: 'Майкл',
		age: 30,
		city: 'Ekaterinburg'
	},
	{
		name: 'Василий',
		age: 40,
		city: 'Moscow'
	},
	{
		name: 'Саша',
		age: 50,
		city: 'Saint-Petersburg'
	}
]

const usersFormatted = users.map(
	({name, age, city}) => {
		return `${name}, ${age} лет, живет в г. ${city}`
	}
)

console.log(
	usersFormatted
)

// Метод reduce

// reduce добавляет дополнительный параметр в начало. Этот параметр принимает начальное значение, которое указано в reduce после ' , ' и изменяет его в зависимости от полученной информации в текущей итерации

console.log(
	'Средний возраст всех покупателей:',
	users.reduce(
		(sum, {age}) => {
			return sum + age
		}, 0
	) / users.length
)

console.log(
	'Общий возраст всех покупателей:',
	users.reduceRight(
		(sum, {age}) => {
			console.log(age)
			return sum + age
		}, 0
	)
)

// Метод reverse()

console.log('Перевернутый массив цен: ', [...prices].reverse())
console.log('Обычный массив цен без изменений:', prices)

const numbers = [1, 2, 12, 4, -5]

console.log([...numbers].sort(
	(a, b) => a - b
))