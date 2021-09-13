import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from './Auth';
import AppSlice from './AppState'
import UserSlice from './UserState'
export default store= configureStore({
  reducer:{ Auth: AuthSlice, App: AppSlice ,User:UserSlice}
});
