import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import { isAutenticado } from '../utils/LoginManager';

const PrivateRoute = (props) => {
    const { component: Component, ...others } = props;
    return (
        <Route {...others}
            render={propsRender => {
                return isAutenticado()
                    ? <Component {...propsRender} />
                    : <Redirect to={{
                        pathname: '/login',
                        state: { from: propsRender.location }
                    }} />
            }}
        />
    )
};

export default PrivateRoute;
