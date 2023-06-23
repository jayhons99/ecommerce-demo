import React from 'react'
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../hooks';
import { getAuthFromStorage } from '../utils/helpers';

interface ProtectedRouteProps {
    children: React.ReactNode
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const isLoggedIn = getAuthFromStorage();
    if (!isLoggedIn ) {
        return <Navigate to='/' />
    }
    return (
        children
    )
}

export default ProtectedRoute