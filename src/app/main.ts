// Ejecución
import {faker} from '@faker-js/faker'
import { addProduct, products } from './products/product.service'

addProduct({
    id: faker.datatype.uuid(),
    image: faker.image.imageUrl(),
    description: faker.commerce.productDescription(),
    title: faker.commerce.productName(),
    createdAt: faker.date.recent(),
    updateAt: faker.date.recent(),
    stock: faker.datatype.number({min: 10, max: 100}),
    size: faker.helpers.arrayElement(['S', 'L', 'M', 'XL']),
    color: faker.color.cssSupportedFunction(),
    price: parseInt(faker.commerce.price(), 10),
    category: {
        id: faker.datatype.uuid(),
        name: faker.commerce.department(),
        createdAt: faker.date.recent(),
        updateAt: faker.date.recent()
    },
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements([]),
})

console.log(products)