// Ejecución
import { faker, tr } from '@faker-js/faker'
import { addProducts, findProducts, products, updateProducts } from './products/product.service'

for (let i = 0; i < 50; i++) {
    addProducts({
        image: faker.image.imageUrl(),
        description: faker.commerce.productDescription(),
        title: faker.commerce.productName(),
        stock: faker.datatype.number({min: 10, max: 100}),
        size: faker.helpers.arrayElement(['S', 'L', 'M', 'XL']),
        color: faker.color.cssSupportedFunction(),
        price: parseInt(faker.commerce.price(), 10),
        categoryId: faker.datatype.uuid(),
        isNew: faker.datatype.boolean(),
        tags: faker.helpers.arrayElements([]),
    })
}

console.log(products)
const product = products[0]
updateProducts(product.id, {
    title: 'New Product',
    stock: 80
})

findProducts({
    stock: 10,
    color: 'Blue',
    createdAt: new Date(),
    isNew: true
})