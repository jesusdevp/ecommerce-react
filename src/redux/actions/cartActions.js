import { types } from "../types";

export const addProductCart = (product) => ({
    type: types.addProductCart,
    payload: product
})

export const deleteProductCart = (product) => ({
    type: types.deleteproductCart,
    payload: product
})

export const limipiarCarrito = () => ({
    type: types.limipiarCarrito
})