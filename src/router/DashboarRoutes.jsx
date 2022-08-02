import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Cart } from '../components/Cart'
import { CompraFinalizada } from '../components/CompraFinalizada'
import { Home } from '../components/Home'
import { Login } from '../components/Login'
import { Producto } from '../components/Producto'
import { Products } from '../components/Products'

export const DashboarRoutes = () => {
    return (
        <Switch >

            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/products/:id" component={Producto} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path='/finalizar' component={CompraFinalizada} />
            <Route exact path='/login' component={Login} />

            <Redirect exact to="/" />
        </Switch>
    )
}
