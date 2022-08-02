import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { limpiarCarrito } from '../redux/actions/cartActions'

export const CompraFinalizada = () => {

    const history = useHistory()
    const dispatch = useDispatch()
    const { cart } = useSelector((state) => state.cart)

    useEffect(() => {


        return () => {
            dispatch(limpiarCarrito())
        }
    }, [])

    const handleSeguir = () => {
        history.push('/')
    }

    return (
        <div className='mt-5' style={{ display: 'flex', justifyContent: 'center' }}>
            {Object.keys(cart).length > 0

                ? <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }} className='mt-5'>
                    <h1>Gracias por tu compra</h1>

                    <button className='btn btn-primary' onClick={() => handleSeguir()}>Seguir comprando</button>
                </div>

                :
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }} className='mt-5'>
                    <h1>Carrito vacio</h1>

                    <button className='btn btn-primary' onClick={() => handleSeguir()}>Comprar ahora</button>
                </div >
            }
        </div >
    )
}
