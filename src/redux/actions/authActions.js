import { types } from "../types"

export const startLogin = () => {
    
    const user = {
        nombre: 'Jesus',
        logged: true
    }
    localStorage.setItem('user', JSON.stringify(user))

    return {
        type: types.loginUser,
        payload: user
    }
}

export const startLogout = () => {
    localStorage.clear()

    return {
        type: types.logout,
    }
}