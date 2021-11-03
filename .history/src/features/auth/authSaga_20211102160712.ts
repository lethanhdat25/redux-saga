import { fork, takeLeading } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'models/user';
import { login } from './authSlice';

function* handleLogin(action: PayloadAction<IUser>) {
  console.log('Logging.....');
}
function* handleLogout(){

};
function* watchDispatch(){

}
export default function* authSaga() {
  console.log('authSaga');
  yield fork(watchDispatch)
}
