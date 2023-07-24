import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import Home from './Home/Home';
import Contacts from 'pages/cotacts';
import RegisterPage from 'pages/registerPage';
import LoginPage from 'pages/loginPage';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/index';
import RestrictedRoute from 'routes/RestrictedRoute';
import ProtectedRoute from 'routes/ProtectedRoute';
import NotFound from './NotFound/NotFound';
import Error from './Error/Error';

function App() {
  const { isRefreshing, isLoggedIn, error } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (error) {
    return <Error />;
  } 

  return isRefreshing ? (<div>Loading...</div>) : (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={ <ProtectedRoute isLoggedIn={isLoggedIn}><Contacts/></ProtectedRoute>} />
          <Route
            path="/register"
            element={
              <RestrictedRoute component={RegisterPage} redirectTo="/contacts" />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
            }
          />
        </Route>
        <Route path="*" element={ <NotFound />} />
      </Routes>
    </div>
  );
}

export default App; 