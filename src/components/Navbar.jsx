import { Link, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { startLogout } from '../redux/actions/authActions'
import { useEffect, useState } from 'react'

export const Navbar = () => {

    const { cart } = useSelector((state) => state.cart)
    const { logged } = useSelector((state) => state.auth)
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user') ? true : false))
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(startLogout())
    }

    useEffect(() => {

        setUser(user ? true : false)
    }, [logged, user])



    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light py-3">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand fw-bold fs-3" >Ecommerce</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/products'>Products</NavLink>
                            </li>
                        </ul>
                        <div className="buttons">
                            {!logged && !user && <NavLink className='btn btn-primary' to='/login' >
                                <i className='fa fa-sign-in me-1'></i>
                                Iniciar sesion</NavLink>}
                            {logged || user ? <button className='btn btn-primary' onClick={handleLogout} >Cerrar sesion</button> : null}
                            <NavLink className='btn btn-primary ms-2' to='/cart' >
                                <i className='fa fa-shopping-cart me-1'></i>
                                Cart ({cart.length})</NavLink>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
