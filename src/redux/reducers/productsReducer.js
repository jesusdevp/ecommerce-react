import { types } from "../types";


const initialState = {
    products: [],
    productById: {}
}

export const productsReducer = (state = initialState, action) => {

    switch (action.type) {
       
        case types.productsLoaded:
            return {
                ...state,
                products: [...action.payload]
            }

        case types.productById:
            return {
                ...state,
                productById: {...action.payload}
            }

        case types.limpiarProductoById: 
            return {
                ...state,
                productById: {}
            }

        default:
            return state;
    }


}