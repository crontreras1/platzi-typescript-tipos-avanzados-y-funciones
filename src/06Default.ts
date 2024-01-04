export const createProduct = (
    id: number | string,
    stock: number = 10,
    isNew: boolean = true
) => {
    return {id, stock, isNew}
}

const product1 = createProduct(1)
const product2 = createProduct(2, 23)
const product3 = createProduct(2, 23, false)

 console.log(product1)
 console.log(product2)
 console.log(product3)