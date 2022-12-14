import React from "react";
import PropTypes from "prop-types";

import { Route } from "react-router-dom";

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    return (
        <div>
            <Route
                {...rest}
                component={(props) =>
                    !isAuthenticated
                        ? <Component {...props} />
                        : <Component {...props} />
                }
            />
        </div>
    );
};

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
};