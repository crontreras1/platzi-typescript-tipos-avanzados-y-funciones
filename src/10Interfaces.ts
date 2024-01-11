type Sizes = 'S' | 'M' | 'L' | 'XL'

interface Product {
    id: string | number,
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
}

const products: Product[] = []

products.push({
    id: 1,
    title: 'Product1',
    createdAt: new Date(),
    stock: 29,
})