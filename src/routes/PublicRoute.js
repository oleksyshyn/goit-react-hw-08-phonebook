import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/index';

function PublicRoute({ component: Component, redirectTo = "/" }) {
    const isLoggedIn = useAuth();

    return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
  
}

export default PublicRoute;
