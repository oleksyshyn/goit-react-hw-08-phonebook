import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import HomePage from 'pages/home';
import Contacts from 'pages/cotacts';
import RegisterPage from 'pages/registerPage';
import LoginPage from 'pages/loginPage';
import { refreshUser } from 'redux/auth/operations';
import PublicRoute from 'routes/PublicRoute';
import { useAuth } from 'hooks/index';
import PrivateRoute from 'routes/PrivateRoute';

function App() {
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
 
  return isRefreshing ? (<div>Loading...</div>) : (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="contacts" element={ <PrivateRoute component={<Contacts/>} redirectTo="login"/>} />
          <Route path="/register" element={<PublicRoute redirectTo="/contacts" component={<RegisterPage />} />} />
          <Route path="/login" element={<PublicRoute redirectTo="/contacts" component={<LoginPage />}  />} />
          {/* <Route path="contacts" element={ <Contacts/>} /> */}
          {/* <Route path="register" element={<RegisterPage/>} /> */}
          {/* <Route path="login" element={<LoginPage/>} /> */}
        </Route>
        {/* <Route path="*" element={ <NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App; 