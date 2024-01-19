const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5]

// Error: array mutable
// numbers.push(6)
// numbers.pop()
// numbers.unshift()


// Great: array no mutable.
numbers.filter(() => {})
numbers.reduce(() => 0)
numbers.map(() => {})
