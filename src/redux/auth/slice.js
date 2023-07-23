import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logout, refreshUser } from './operations';

const initialState = {
    user: { name: null, email: null, password: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isAuthError: null,
};

const authSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: {
        [register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isAuthError = false;
        },
        [register.rejected](state) {
            state.isAuthError = false;
        },
        [logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isAuthError = false;
        },
        [logIn.rejected](state) {
            state.isAuthError = false;
        },
        [logout.fulfilled](state) {
            state.user = { name: null, email: null, password: null };
            state.token = null;
            state.isLoggedIn = false;
            state.isRefreshing = false;
            state.isAuthError = null;
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