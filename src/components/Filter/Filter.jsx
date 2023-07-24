import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/contactsSlice';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function Filter() {
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const handleFilterChange = (e) => {
        dispatch(setFilter(e.target.value));
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '2rem',
            }}
        >
            <Typography variant="h5" component="p">Find contacts by name</Typography>
            <TextField
                type="text"
                value={filter}
                onChange={handleFilterChange}
            />
        </Box>
    )
}

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string,
};