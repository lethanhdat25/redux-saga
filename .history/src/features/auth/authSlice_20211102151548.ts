import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'models/user';
interface ILoginPayload {
  username: string;
  password: string;
}
export interface IAuthState {
  isLoggedIn: boolean;
  isLogging?: boolean;
  currentUser?: IUser;
  isFailed?: boolean;
}
const initialState: IAuthState = {
  isLoggedIn: false,
  isLogging: false,
  currentUser: undefined,
  isFailed: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<ILoginPayload>) => {
      state.isLogging = true;
    },
    loginSuccess: (state, action: PayloadAction<IUser>) => {
      state.isLogging = false;
      state.isFailed = false;
      state.currentUser = action.payload;
    },
    loginFailed: (state, action: PayloadAction<string>) => {
      state.isFailed = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.currentUser = undefined;
    },
  },
});
//Reducer
export default authSlice.reducer;
export const authSelector = (state: any) => state.auth;
//Action
export const { login, loginSuccess, loginFailed, logout } = authSlice.actions;
