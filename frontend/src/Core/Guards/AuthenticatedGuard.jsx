import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

const isAuthenticated = localStorage.getItem("user_token");

const AuthenticatedGuard = ({children}) => {

    const location = useLocation();

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" state={ {from: location }} replace /> 
}

export default AuthenticatedGuard;