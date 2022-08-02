import React from "react";
import PropTypes from "prop-types";

import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {


    return (
        <div>
            <Route
                {...rest}
                component={(props) =>
                    isAuthenticated ? (
                        <Redirect to="/" />

                    ) : (
                        <Component {...props} />
                    )
                }
            />
        </div>
    );
};

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
}