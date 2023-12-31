import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logout, refreshUser } from './operations';

const initialState = {
    user: { name: null, email: null, password: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
};

const authSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: {
        [register.pending](state) {
            state.isRefreshing = true;
        },
        [register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        },
        [register.rejected](state, action) {
            state.error = action.payload;
        },
        [logIn.pending](state) {
            state.isRefreshing = true;
        },
        [logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        },
        [logIn.rejected](state, action) {
            state.error = action.payload;
        },
        [logout.pending](state) {
            state.isRefreshing = true;
        },
        [logout.fulfilled](state) {
            state.user = { name: null, email: null, password: null };
            state.token = null;
            state.isLoggedIn = false;
            state.isRefreshing = false;
        },
        [logout.rejected](state, action) {
            state.error = action.payload;
        },
        [refreshUser.pending](state) {
            state.isRefreshing = true;
        },
        [refreshUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        },
        [refreshUser.rejected](state) {
            state.isRefreshing = false;
        },
    }
});

export const authReducer = authSlice.reducer;