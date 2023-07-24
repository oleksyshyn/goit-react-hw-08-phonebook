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
// import RestrictedRoute from 'routes/RestrictedRoute';

import ProtectedRoute from 'routes/ProtectedRoute';
// import { useNavigate } from 'react-router-dom';

function App() {
  const { isRefreshing, isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     navigate('/contacts');
  //   } 
  // }, [isLoggedIn, navigate]);
 
  return isRefreshing ? (<div>Loading...</div>) : (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={ <ProtectedRoute isLoggedIn={isLoggedIn}><Contacts/></ProtectedRoute>} />
          {/* <Route path="/register" element={<RestrictedRoute  component={<RegisterPage />} />} redirectTo="/contacts" /> */}
          {/* <Route path="/login" element={<RestrictedRoute component={<LoginPage />} redirectTo="/contacts"/>} /> */}
          {/* <Route path="/contacts" element={ <Contacts/>} /> */}
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/login" element={<LoginPage/>} />
        </Route>
        {/* <Route path="*" element={ <NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App; 