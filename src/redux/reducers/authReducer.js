import { types } from "../types";


const initialState = {
    user: {},
    logged: false
}

export const authReducer = (state = initialState, action) => {
    const user = JSON.parse(localStorage.getItem('user'))

    switch (action.type) {
        case types.loginUser:
            return{
                ...state,
                user: action.payload,
                logged: user ? user.logged : true,
            }

        case types.logout:
            return {
                ...state,
                user: {},
                logged: false
            }
           
    
        default:
            return state;
    }


}