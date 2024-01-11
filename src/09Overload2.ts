export function parseStr(input: string): string[]
export function parseStr(input: string[]): string
export function parseStr(input: number): boolean

// export function parseStr (input: string | string[]): string | string[] {
//     if (Array.isArray(input)) {
//         return input.join('')
//     } else {
//         return input.split('')
//     }
// }

export function parseStr (input: unknown): unknown {
    if (Array.isArray(input)) {
        return input.join('')
    } else if (typeof input === 'string'){
        return true
    }
}

const rta = parseStr('Cristian')
const rta2 = parseStr(['C', 'r', 'i', 's'])
console.log(rta)
console.log(rta2)