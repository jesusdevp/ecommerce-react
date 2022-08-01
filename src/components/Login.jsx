import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'
import validator from 'validator'
import { startLogin } from '../redux/actions/authActions'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

export const Login = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const { formState, handleInputChange, handleResetForm } = useForm({
        email: '',
        password: ''
    })

    const { email, password } = formState
    const [mensaje, setMensaje] = useState('')


    const validatorForm = () => {
        if (!validator.isEmail(email)) {
            setMensaje(true)
            return false
        } else if (password.trim().length < 6) {
            setMensaje(true)
            return false
        } else if (validator.isEmpty(password)) {
            setMensaje(true)
            return false
        }

        setMensaje('')
        return true
    }




    const handleLogin = (e) => {
        e.preventDefault()

        if (validatorForm()) {
            dispatch(startLogin())

            handleResetForm()
            setMensaje(false)
            history.push('/')
        } else {
            setMensaje(true)
        }

    }

    return (<>
        <h1 className='text-center mt-5'>Iniciar sesion</h1>
        <div className='mt-5' style={{ display: 'flex', justifyContent: 'center', margin: '0 auto', height: '80vh' }}>
            <form className='mt-5' onSubmit={handleLogin} >
                <div className="form-group mb-3">
                    <label for="email">Email address:</label>
                    <input
                        value={email}
                        onChange={handleInputChange}
                        name='email'
                        type="email"
                        className="form-control"
                        id="email" />
                </div>
                <div className="form-group mb-3">
                    <label for="pwd">Contraseña:</label>
                    <input
                        value={password}
                        onChange={handleInputChange}
                        name='password'
                        type="password"
                        className="form-control"
                        id="pwd"
                    />
                </div>
                {mensaje
                    && <h5>Todos los campos son obligatorios</h5>
                }
                <button onClick={handleLogin} onSubmit={handleLogin} type="submit" className="btn btn-primary w-100">Iniciar</button>
            </form>

        </div>
    </>
    )
}
