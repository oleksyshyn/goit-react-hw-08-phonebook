import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function ContactsList() {
    const {items, isLoading} = useSelector(selectContacts);
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

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <List>
            {filteredContacts.map(({ id, name, number }) => (
                <li key={id}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginTop: '1rem',
                            
                        }}
                        gap={10}
                    >
                        <Box
                            sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                        gap={1}
                        >
                            <AccountCircleIcon></AccountCircleIcon>
                            <Typography>{name}</Typography>
                        </Box>
                        <Typography>{number}</Typography>
                        <Button color="error" variant="contained" size="small" onClick={() => deleteContactHandler(id)}>Delete</Button>
                    </Box>
                </li>
            ))}
            </List>
        </Box>
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