import React, { useContext } from 'react';
import { authContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { users, loadding } = useContext(authContext)
    const location = useLocation()

    if (loadding) {
        return <h1 className='text-5xl font-bold'><span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span></h1>
    }
    if (users) {
        return children
    }
    return <Navigate to='/signin' state={location.pathname}></Navigate>

};

export default PrivateRoute;