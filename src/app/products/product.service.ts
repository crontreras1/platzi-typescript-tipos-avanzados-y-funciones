// Manipulación
import {Product } from './product.model'

export const products: Product[] = []

export const addProduct = (data: Product) => {
    products.push(data)
}

// export const updateProduct = (id: string, changes: Product) => {

// }

// export const deleteProduct = (id: string, changes: Product) => {

// }

// export const getProduct = (id: string, changes: Product) => {

// }

// export const searchProduct = (id: string, changes: Product) => {

// }