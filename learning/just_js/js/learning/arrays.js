// Массивы в js #1/2

// Создание матрицы

const matrix = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8]
]

console.log(matrix[2][2])

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
	typeof arrayToShow.join(' ')
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

console.log(totalArray);