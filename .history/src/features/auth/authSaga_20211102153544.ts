import { takeLeading } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'models/user';
import { login } from './authSlice';

export function* handleLogin(action: PayloadAction<IUser>) {
  console.log('Logging.....');
}

export default function* authSaga() {
  console.log('authSaga');
  yield takeLeading(login.toString(), handleLogin);
}
