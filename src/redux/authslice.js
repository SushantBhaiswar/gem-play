import { createSlice } from '@reduxjs/toolkit';

const generateToken = () => {
    let token = ""
    for (let i = 0; i < 1000; i++) {
        token += String.fromCharCode(97 + Math.floor(Math.random() * 26));
    }
    return token
}

const getInitialToken = () => {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        return localStorage.getItem('token') || null;
    }
    return null;
};

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: getInitialToken(),
        loading: false,
        error: null,
    },
    reducers: {
        logout(state) {
            state.user = null;
            state.token = null;
            if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
                localStorage.removeItem('token');
            }
        },
        login(state, actions) {
            const { email, password, name, balance } = actions.payload
            state.user = { email, password, name, balance };
            let generatedToken = generateToken();
            state.token = generatedToken;
            if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
                localStorage.setItem('token', generatedToken);
            }
        },
    },

});

export const { logout, login } = authSlice.actions;
export default authSlice.reducer;
