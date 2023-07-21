import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import css from './ContactsList.module.css';
import PropTypes from 'prop-types';

function ContactsList() {
    const {items, isLoading, error} = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const deleteContactHandler = (id) => {
        dispatch(deleteContact(id));
    }
   
    const filteredContacts = items.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())
    );
  
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return "Error: " + error;
    }

    return (
        <ul>
            {filteredContacts.map(({ id, name, number }) => (
                <li className={css.contacts_list_item} key={id}>
                    <p className={css.contact}>{name}: {number}</p>
                    <button className={css.button} onClick={() => deleteContactHandler(id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default ContactsList;

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.number.isRequired,
        }),
    ),
};