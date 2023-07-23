import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import HomePage from 'pages/home';
import Contacts from 'pages/cotacts';
import RegisterPage from 'pages/registerPage';
import LoginPage from 'pages/loginPage';
import { refreshUser } from 'redux/auth/operations';


// import { fetchContacts } from 'redux/contacts/operations';
import { useAuth } from 'hooks/index';
// import ContactForm from './ContactForm/ContactForm';
// import Filter from './Filter/Filter';
// import ContactsList from './ContactsList/ContactsList';
// import css from './App.module.css';
import ProtectedRoute from 'routes/ProtectedRoute';

function App() {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="contacts" element={ <ProtectedRoute isLoggedIn={isLoggedIn}><Contacts /></ProtectedRoute>} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        {/* <Route path="*" element={ <NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App; 