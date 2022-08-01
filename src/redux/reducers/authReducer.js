import { types } from "../types";


const initialState = {
    user: {},
    logged: false
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.loginUser:
            return{
                ...state,
                user: action.payload,
                logged: true,
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