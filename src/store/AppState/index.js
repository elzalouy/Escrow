import {createSlice} from '@reduxjs/toolkit';
import initialState from './initialState';
import reducers from './reducer';
//App State Slice is a part of the store 
const AppSlice=createSlice({
    name:"App",
    initialState,
    reducers:reducers
})
export const AppActions=AppSlice.actions;
export default AppSlice.reducer;