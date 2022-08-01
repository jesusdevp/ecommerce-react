import { NavLink, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addProductCart } from '../redux/actions/cartActions'

export const ProductDetails = ({ product }) => {


    const dispatch = useDispatch()
    const history = useHistory()

    const handleAddProduct = (product) => {
        dispatch(addProductCart(product))
    }

    const handleRegresar = () => {
        history.goBack()
    }

    return (
        <>
            <div className='mb-3'>

                <button onClick={handleRegresar} className='btn btn-info w-12' style={{ width: '15%' }}>
                    Regresar
                </button>
            </div>
            <div className="col-md-6">
                <img
                    src={Object.keys(product).length > 0 ? product.images[0] : ''}
                    alt={product.title}
                    height='400px'
                    width='400px'
                />

            </div>
            <div className="col-md-6">
                <h4 className='text-uppercase'>
                    {Object.keys(product).length > 0 && product.category.name}
                </h4>
                <h1 className='display-5'>{product.title}</h1>
                <h3 className='display-6 fw-bold my-4' > $ {product.price}</h3>
                <p className='lead'>{product.description}</p>
                <button onClick={() => handleAddProduct(product)} className='btn btn-success'>Agregar al carrito</button>
                <NavLink to='/cart' className="btn btn-primary ms-2 px-3 py-2">Ir al carrito</NavLink>

            </div>
        </>
    )
}
