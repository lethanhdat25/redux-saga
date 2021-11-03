import { fork, take } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'models/user';
import { ILoginPayload, login } from './authSlice';

function* handleLogin(action: PayloadAction<IUser>) {
  console.log('Logging.....');
}
function* handleLogout() {}
function* watchDispatch() {
  const action: PayloadAction<ILoginPayload> = yield take(login.toString());
  console.log(action);
}
export default function* authSaga() {
  console.log('authSaga');
  yield fork(watchDispatch);
}
