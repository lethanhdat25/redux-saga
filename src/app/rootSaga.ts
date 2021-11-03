import authSaga from 'features/auth/authSaga';
import counterSaga from 'features/counter/counterSaga';
import { all } from 'redux-saga/effects';
//TODO: create root saga

export default function* rootSaga() {
  console.log('rootSaga');
  yield all([counterSaga(), authSaga()]);
}
