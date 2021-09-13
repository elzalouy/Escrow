import initialState from './initialState';
import reducers from './reducers';
import {createSlice} from '@reduxjs/toolkit';

const UserSlice=createSlice({
    name:'user',
    initialState,
    reducers:reducers
})
export const UserActions=UserSlice.actions;
export default UserSlice.reducer;