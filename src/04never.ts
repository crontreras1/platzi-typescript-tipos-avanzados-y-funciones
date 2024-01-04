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

console.log('Holi')
console.log([1, 2, 3, 4])
console.log(1,)
console.log('Holi, despues del error')