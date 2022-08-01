import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import {cartReducer} from './cartReducer'
import { productsReducer } from "./productsReducer";

export const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    auth: authReducer
})