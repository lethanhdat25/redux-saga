import { delay, takeEvery, takeLatest } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { incrementSaga } from './counterSlice';

export function* handleIncrementSaga(action: PayloadAction) {
  console.log('Wating 2s');
  yield delay(2000);
  console.log('Waiting done,dispatch action');
}
export default function* counterSaga() {
  console.log('counterSaga');
  yield takeLatest(incrementSaga.toString(), handleIncrementSaga);
}
