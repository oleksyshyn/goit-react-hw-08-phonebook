// import { Navigate } from "react-router-dom";
// import { useAuth } from "hooks/index";

// function PrivateRoute({ component: Component, redirectTo = '/' }) {
//     const { isLoggedIn, isRefreshing } = useAuth();
//     const shouldRedirect = !isRefreshing && !isLoggedIn;

//     return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
  
// }

// export default PrivateRoute;

import { Navigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, children }) {
    if (!isLoggedIn) {
        return <Navigate to="/login" replace/>
    }
    return children;;
}

export default ProtectedRoute;