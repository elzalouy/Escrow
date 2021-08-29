import initialState from './initialState';
import {createSlice} from '@reduxjs/toolkit';
import reducers from './reducers';

const AuthSlice=createSlice({
    name:"auth",
   initialState,
   reducers:reducers
});
export const AuthActions=AuthSlice.actions;
export default AuthSlice.reducer;
