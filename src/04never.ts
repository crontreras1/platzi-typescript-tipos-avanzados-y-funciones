const withoutEnd = () => {
    while (true) {
        console.log('Esto es un ciclo infinito :)')
    }
}

const fail = (messagge: string) => {
    throw new Error(messagge)
}

const example = (input: unknown) => {
    if (typeof input === 'string') {
        return 'Esto es un string'
    } else if (Array.isArray(input)) { // Así se manejan los typeof con arrays 
        return 'Es un array.'
    }

    return fail('not match')
}

console.log(example('Holi'))
console.log(example([1, 2, 3, 4]))
console.log(example(1)) // Reporta error y se detiene.
console.log(example('Holi, despues del error'))