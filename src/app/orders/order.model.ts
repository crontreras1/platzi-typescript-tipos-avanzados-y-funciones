import { Product } from "../products/product.model"
import { User } from "../../01Enum"

export interface Order {
    id: string | number
    createdAt: Date
    products: Product[]
    user: User
}