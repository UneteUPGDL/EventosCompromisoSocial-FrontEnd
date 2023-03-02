import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface userState {
    loggedIn: boolean;
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    role: string;
}

const initialState: userState = {
    loggedIn: false,
    id: '',
    username: '',
    firstName: '',
    lastName: '',
    role: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        toggleLogin: state => {
            state.loggedIn = !state.loggedIn;
        },

        setFirstName: (state, action: PayloadAction<string>) => {
            state.firstName = action.payload;
        },

        setLastName: (state, action: PayloadAction<string>) => {
            state.lastName = action.payload;
        },

        setRole: (state, action: PayloadAction<string>) => {
            state.role = action.payload;
        },

        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
            return;
        },
    },
});

export const { toggleLogin, setUsername, setFirstName, setLastName, setRole } =
    userSlice.actions;

export default userSlice.reducer;
