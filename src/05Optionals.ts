export const createProduct = (
    id: string | number,
    isNew: boolean,
    stock?: number // Los parametros opcionales llevan el símbolo de interrogación (?) y siempre van listados al final
) => {
    return {
        id,
        isNew,
        stock
    }
}

const product1 = createProduct(1, true)
const product2 = createProduct(1, false, 23)

console.log(product1)