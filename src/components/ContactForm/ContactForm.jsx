import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const { items } = useSelector(selectContacts);
    const dispatch = useDispatch();

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleNumberChange = (e) => {
        setNumber(e.target.value);
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const contactId = nanoid();
        const newContact = { id: contactId, name, number };
        const isSameName = items.some(item => item.name.toLowerCase() === newContact.name.toLowerCase());
        if (isSameName) {
            alert(`${newContact.name} is already in contacts!`);
            return;
        }
        dispatch(addContact(newContact));
        setName('');
        setNumber('');
    }

    return (
        <div className={css.contact_form}>
            <form onSubmit={formSubmitHandler}>
                <label className={css.label}>
                    Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={handleNameChange}
                        className={css.input}
                    />
                </label>
                <label className={css.label}>
                    Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        onChange={handleNumberChange}
                        className={css.input}
                    />
                </label>
                <button type="submit" className={css.button}>Add contact</button>
            </form>
        </div>
    );
}

export default ContactForm;

ContactForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number,
};