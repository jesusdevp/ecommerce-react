import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { limipiarproductoById, startProductById } from '../redux/actions/productsActions'
import { Loading } from './Loading'
import { ProductDetails } from './ProductDetails'
import { useDispatch, useSelector } from 'react-redux'

export const Producto = () => {

    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const { productById } = useSelector((state) => state.products)


    useEffect(() => {

        setLoading(true)

        dispatch(startProductById(id))

        setLoading(false)

        return () => {
            dispatch(limipiarproductoById())
        }

    }, [])



    return (
        <>
            <div className="container py-5">
                <div className="row py-4">
                    {loading
                        ? <Loading />

                        : <ProductDetails product={productById} />

                    }
                </div>
            </div>
        </>
    )
}
