
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const user = useSelector( state => state.auth );
    // const location=useLocation();
    // localStorage.setItem('lastPath', location.pathname + location.search);

    return user.logged ? children: <Navigate to='/login' />

};

export default PrivateRoutes;