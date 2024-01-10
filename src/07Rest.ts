import { User, ROLES} from './01Enum'
const currentUser: User = {
    username: 'crontreras1', 
    role: ROLES.CUSTOMER
}

export const checkAdminRole = () => {
    if (currentUser.role === ROLES.ADMIN) {
        return 'Soy el admin 😎'
    }
    return 'Chale, me estafaron 😣'
}

const rta = checkAdminRole()
console.log(rta)