import { fetchApi } from "../../helpers/fetchApi"
import { types } from "../types"

export const productStartLoading = (counter) => {
    return  async(dispatch) => {
        try {
            
            const resp = await fetchApi(`products?offset=${counter}&limit=12`)
            const result = await  resp.json()

            dispatch(productsLoaded(result))

        } catch (error) {
            console.log(error);
        }
    }
}

const productsLoaded = (products) => ({
    type: types.productsLoaded,
    payload: products
})

export const startProductById = (id) => {


    return async (dispatch) => {

        try {

            const resp = await fetchApi(`products/${id}`)
            const result = await resp.json()

            dispatch(productById(result))
            
        } catch (error) {
            console.log(object);
        }


    }

}

const productById = (product) => ({
    type: types.productById,
    payload: product
})

export const limipiarproductoById = () => ({
    type: types.limpiarProductoById,
})