export enum ROLES {
	ADMIN = 'admin',
	SELLER = 'seller',
	CUSTOMER = 'customer',
}

export type User = {
    username: string
    role: ROLES
}

const crontreras1: User = {
    username: 'crontreras1',
    role: ROLES.ADMIN
}