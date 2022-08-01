import React, { useEffect, useState } from 'react'
import { ProductosContainer } from './ProductosContainer'
import { Loading } from './Loading'
import { useDispatch, useSelector } from 'react-redux'
import { productStartLoading } from '../redux/actions/productsActions'
import { useCounter } from '../hooks/useCounter'

export const Products = () => {

    const [filter, setFilter] = useState([])
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const { products } = useSelector(state => state.products)
    const { counter, increment, decrement } = useCounter(0)


    useEffect(() => {

        setLoading(true)
        dispatch(productStartLoading(counter))
        setLoading(false)

    }, [counter])



    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Ultimos productos</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ProductosContainer data={products} filter={filter} setFilter={setFilter} />}
                </div>
                {Object.keys(filter).length > 0 ?
                    <div className='d-flex justify-content-between'>
                        <button onClick={() => decrement(12)} className='btn btn-primary'>Atras</button>
                        <button onClick={() => increment(12)} className='btn btn-primary'> Siguiente</button>
                    </div> :
                    <h1>No se encontraron productos de esta categoria</h1>
                }
            </div>
        </div>
    )
}
