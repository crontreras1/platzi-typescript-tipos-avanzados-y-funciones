function parseStr (input: string | string[]): string | string[] {
    if (Array.isArray(input)) {
        return input.join('')
    } else {
        return input.split('')
    }
}

const rta = parseStr('Cristian')
const rta2 = parseStr([
    'C', 'r', 'i',
    's', 't', 'i',
    'a', 'n'
  ])
console.log(rta)
console.log(rta2)