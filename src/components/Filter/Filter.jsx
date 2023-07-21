import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

function Filter() {
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const handleFilterChange = (e) => {
        dispatch(setFilter(e.target.value));
    }

    return (
        <div>
            <p className={css.filter_title} >Find contacts by name</p>
            <input
                type="text"
                value={filter}
                onChange={handleFilterChange}
            />
        </div>
    )
}

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string,
};