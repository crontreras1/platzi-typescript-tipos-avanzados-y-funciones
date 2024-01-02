// JS
const prices1 = [1, 2, 3, 4, 'cr']
// TS con un solo tipo de dato
const prices2: number[] = [1, 2, 3, 4, 5]
// TS con más de un tipo de dato
const prices3: (number | string)[] = [1, 2, 3, 'cr']

//Tuples
const user: [string, number, boolean] = ['Cristian', 20, true]
console.log(user)
// Destructurando tuplas
const [username, age] = user
console.log(username, age)