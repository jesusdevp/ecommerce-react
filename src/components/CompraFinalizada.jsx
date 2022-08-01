import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

export const CompraFinalizada = () => {

    const history = useHistory()
    const { cart } = useSelector((state) => state.cart)

    const handleSeguir = () => {
        history.push('/')
    }

    return (
        <div className='justify-content-center'>
            {Object.keys(cart).length > 0

                ? <div>
                    <h1>Gracias por tu compra</h1>

                    <button onClick={() => handleSeguir()}>Seguir comprando</button>
                </div>

                :
                <div>
                    <h1>Carrito vacio</h1>

                    <button onClick={() => handleSeguir()}>Seguir comprando</button>
                </div>
            }
        </div>
    )
}
