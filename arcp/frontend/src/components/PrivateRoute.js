import React from 'react'
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {

    let token = true;

    return (
        <Route {...rest}>{token ? <Component /> : <Redirect to="/login" />}</Route>
    );
};

export default PrivateRoute;