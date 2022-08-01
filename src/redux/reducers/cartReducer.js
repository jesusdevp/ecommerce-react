import { types } from "../types";


const initialState = {
    cart: []
}

export const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.addProductCart:
            const existProduct = state.cart.find((cartItem) => cartItem.id === action.payload.id )
            if(existProduct) {
                return {
                    ...state,
                    cart: state.cart.map((cartItem) => cartItem.id === action.payload.id ? {...action.payload, quantity:  cartItem.quantity + 1} : cartItem)
                }
            } else {

                return {
                ...state,
                cart: [...state.cart, {...action.payload, quantity: 1}]
            }
        }

        case types.deleteproductCart: 
            const existProduct1 = state.cart.find((cartItem) => cartItem.id === action.payload.id )
            if(existProduct1.quantity === 1) {
                return {
                    ...state,
                    cart: state.cart.filter((cartItem) => cartItem.id !== existProduct1.id)
                }
            } else {
                return {
                    ...state,
                    cart: state.cart.map((cartItem) => 
                        cartItem.id === action.payload.id ? {...cartItem, quantity: cartItem.quantity-1} : cartItem
                    )
                }
            }

        case types.limipiarCarrito: 
            return {
                ...state,
                cart: []
            }
    
        default:
            return state;
    }


}