import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from "./operations";

const initialState = {
    contacts: {
        items: [],
        isLoading: false,
        error: null,
    },
    filter: '',
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        // addContact(state, action) {
        //     state.contacts.push(action.payload);
        // },
        // deleteContact(state, action) {
        //     state.contacts.items = state.contacts.items.filter(
        //         item => item.id !== action.payload
        //     );
        // },
        setFilter(state, action) {
            state.filter = action.payload;
        },
    },
    extraReducers: {
        [fetchContacts.pending](state) {
            state.contacts.isLoading = true;
        },
        [fetchContacts.fulfilled](state, action) {
            state.contacts.isLoading = false;
            state.contacts.error = null;
            state.contacts.items = action.payload;
        },
        [fetchContacts.rejected](state, action) {
            state.contacts.isLoading = false;
            state.contacts.items = [];
            state.contacts.error = action.payload;
        },   

        // [deleteContact.pending](state) {
        //     state.contacts.isLoading = true;
        // },
        [deleteContact.fulfilled](state, action) {
            // state.contacts.isLoading = false;
            state.contacts.error = null;
            state.contacts.items = state.contacts.items.filter(
                item => item.id !== action.payload.id
            );
        },
        [deleteContact.rejected](state, action) {
            // state.contacts.isLoading = false;
            state.contacts.error = action.payload;
        },

        // [addTask.pending](state) {
        //     state.contacts.isLoading = true;
        // },
        [addContact.fulfilled](state, action) {
            // state.contacts.isLoading = false;
            state.contacts.error = null;
            state.contacts.items.push(action.payload);
        },
        [addContact.rejected](state, action) {
            // state.contacts.isLoading = false;
            state.contacts.error = action.payload;
        },
    }
});

// export const addContact = contactsSlice.actions.addContact;
// export const deleteItem = contactsSlice.actions.deleteContact;
export const setFilter = contactsSlice.actions.setFilter;

export const contactsReducer = contactsSlice.reducer;