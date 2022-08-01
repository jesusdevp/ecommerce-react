import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addProductCart, deleteProductCart, limipiarCarrito } from '../redux/actions/cartActions'

export const Cart = () => {

    const history = useHistory()

    const dispatch = useDispatch()
    const { logged } = useSelector((state) => state.auth)

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user') ? true : false))
    const { cart } = useSelector((state) => state.cart)

    const [total, setTotal] = useState(0)

    useEffect(() => {

        const sumaTotal = cart.map(item => item.price * item.quantity).reduce((prev, curr) => prev + curr, 0);

        setTotal(sumaTotal);

    }, [cart])


    useEffect(() => {
        setUser(user ? true : false)
    }, [logged, user])


    const increaseProduct = (product) => {
        dispatch(addProductCart(product))
    }


    const decrementProduct = (product) => {
        dispatch(deleteProductCart(product))
    }

    const handleFinalizarCompra = () => {
        history.push('/finalizar')
        dispatch(limipiarCarrito())
    }

    const handleHome = () => {
        history.push('/')
    }


    return (
        <>
            <div className='container mt-5'>
                {Object.keys(cart).length > 0
                    && cart.map((cartItem) => (

                        <div className='row mb-3' key={cartItem.id}>
                            <div className='col-md-4'>
                                <img src={Object.keys(cartItem).length > 0 ? cartItem.images[0] : ''} alt={cartItem.title} height='200px' width='180px' />
                            </div>
                            <div className='col-md-4'>
                                <h3>{cartItem.title}</h3>
                                <p className='lead fw-bold'>
                                    {cartItem.quantity} X ${cartItem.price} = $
                                    {cartItem.quantity * cartItem.price}
                                </p>
                                <button className='btn btn-primary me-4' onClick={() => decrementProduct(cartItem)} >
                                    <i className='fa fa-minus'></i>
                                </button>
                                <button className='btn btn-primary' onClick={() => increaseProduct(cartItem)} >
                                    <i className='fa fa-plus'></i>
                                </button>
                            </div>

                        </div>
                    ))

                }

                {Object.keys(cart).length > 0
                    ?
                    <>
                        <h3>Total:  ${total}</h3>
                        <div className='d-flex justify-content-end w-3'>

                            <button disabled={logged || user ? false : true} onClick={handleFinalizarCompra} className='btn btn-primary'>Finalizar compra</button>

                        </div>
                        {!logged || !user ? <h5>Inicia sesion para poder comprar</h5> : null}
                    </>
                    :
                    <>
                        <h1>El carrito esta vacio </h1>
                        <button className='btn btn-primary' onClick={handleHome}>Comprar ahora</button>
                    </>
                }

            </div>
        </>
    )
}
