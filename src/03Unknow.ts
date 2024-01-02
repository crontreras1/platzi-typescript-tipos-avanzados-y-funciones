// Any
let anyVar: any

anyVar = ''
anyVar = 1
anyVar = true
anyVar = {}
anyVar = []

anyVar.toUpperCase()

//Unknown
let unknownVar: unknown

unknownVar = true
unknownVar = null
unknownVar = undefined
unknownVar = 1
unknownVar = []
unknownVar = {}

if (typeof unknownVar === 'string') {
    unknownVar.toUpperCase()
}