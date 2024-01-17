// Ejecución
import { faker } from '@faker-js/faker'
import { addProduct, products } from './products/product.service'

for (let i = 0; i < 50; i++) {
    addProduct({
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