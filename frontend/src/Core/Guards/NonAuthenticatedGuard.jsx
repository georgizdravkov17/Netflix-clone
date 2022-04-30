import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const isAuthenticated = localStorage.getItem("user_token");

const NonAuthenticatedGuard = () => {

    return isAuthenticated ? <Navigate to="/"/> : <Outlet />
}

export default NonAuthenticatedGuard;