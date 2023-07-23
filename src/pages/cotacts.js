// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchContacts } from 'redux/contacts/operations';
// import { useAuth } from 'hooks/index';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';


function Contacts() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    );
    
  //   const { isLoggedIn, user } = useAuth();
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(fetchContacts());
  //   }, [dispatch]);
  //   return (
  //     <div className={css.phonebook}>
  //       <h1 className={css.title}>Phonebook</h1>
  //       <ContactForm />
  //       <h2 className={css.contacts_title}>Contacts</h2>
  //       <Filter />
  //       <ContactsList />
  //     </div>
  //   );
}

export default Contacts;
