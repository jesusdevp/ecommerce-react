import React from 'react'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Switch, Route, Redirect, } from 'react-router-dom'
import { Products } from './components/Products'
import { Producto } from './components/Producto'
import { Cart } from './components/Cart'
import { CompraFinalizada } from './components/CompraFinalizada'
import { Login } from './components/Login'
import { useSelector } from 'react-redux'

export const App = () => {

  const { logged } = useSelector((state) => state.auth)

  return (
    <>
      <Navbar />
      <Switch >

        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Producto} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path='/finalizar' component={CompraFinalizada} />
        <Route exact path='/login' component={Login} />

        {logged && <Redirect to='/' />}

      </Switch>
    </>
  )
}

