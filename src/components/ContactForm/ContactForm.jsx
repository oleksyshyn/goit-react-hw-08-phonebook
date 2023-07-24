import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '1rem',
            }}
        >
            <form onSubmit={formSubmitHandler} style={{width: '100%'}}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        margin: '0 auto',
                        width: '100%',
                        maxWidth: '500px',
                        '& .MuiTextField-root': {
                            marginBottom: '1rem',
                        },
                    }}
                >
                    <TextField
                        type="text"
                        name="name"
                        label="Name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        fullWidth
                        value={name}
                        onChange={handleNameChange}
                    />

                    <TextField
                        type="tel"
                        name="number"
                        label="Number"
                        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        fullWidth
                        value={number}
                        onChange={handleNumberChange}
                    />
                    <Button variant="contained" type="submit">Add contact</Button>
                </Box>
            </form>
           
        </Box>
    );
}

export default ContactForm;

ContactForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number,
};