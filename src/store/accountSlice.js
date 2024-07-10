import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    firstName: '',
    lastName: '',
    businessName: '',
    brandName: '',
    slogan: '',
    designRequirements: [],
    niche: [],
    otherDetails: '',
    fontOptions: [],
    colorOptions: [],
    user: null,
    userId: null,
    workEmail: '',
    phoneNo: '',
    username: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    profileImg: {},
    token: null
};

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        updateFormData: (state, action) => {
            return { ...state, ...action.payload };
        },
      
        setUser: (state, action) => {
            
            const { user, token, userId } = action.payload;
            state.user = user;
            state.userId=userId;
            state.token = token;
            localStorage.setItem('token', token); // persist token in localStorage
            localStorage.setItem('user', JSON.stringify(user)); // persist user in localStorage
        },
        removeToken: (state) => {
            state.token = null;
            state.user = null;
            state.userId = null;
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        },
        resetFormData: () => initialState,
        updateProfileField: (state, action) => {
            const { field, value } = action.payload;
            state[field] = value;
        }
    },
});

export const { updateFormData, setUser, removeToken, resetFormData, updateProfileField } = accountSlice.actions;
export default accountSlice.reducer;