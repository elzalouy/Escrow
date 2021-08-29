import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from './Auth';
import AppSlice from './AppState'

export default store= configureStore({
  reducer:{ Auth: AuthSlice, App: AppSlice }
});
