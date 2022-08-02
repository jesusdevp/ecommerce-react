import { Navbar } from '../components/Navbar'
import { PublicRoute } from './PublicRoutes'
import { DashboarRoutes } from './DashboarRoutes'
import { PrivateRoute } from './PrivateRouter'
import { useSelector } from 'react-redux'
import { Login } from '../components/Login'

export const AppRouter = () => {

    const { logged } = useSelector((state) => state.auth)


    return (
        <>
            <Navbar />
            <PublicRoute
                path="/"
                component={DashboarRoutes}
                isAuthenticated={logged}
            />

            <PrivateRoute
                exact
                path="/login"
                component={Login}
                isAuthenticated={logged}
            />

        </>
    )
}

