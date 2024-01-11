export enum ROLES {
	ADMIN = 'admin',
	SELLER = 'seller',
	CUSTOMER = 'customer'
}

export interface User {
    name: string
    username: string
    role: ROLES
}