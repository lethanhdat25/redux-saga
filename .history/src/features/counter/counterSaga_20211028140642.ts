import { takeEvery } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { incrementSaga } from './counterSlice';

export function* handleIncrementSaga(action: PayloadAction) {
  console.log('LOG', action);
}
export default function* counterSaga() {
  console.log('counterSaga');
  yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
}
