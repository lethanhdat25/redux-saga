import { delay, put, takeEvery, takeLatest } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { incrementSaga, incrementSagaSuccess } from './counterSlice';

export function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log('Wating 2s');
  yield delay(2000);
  console.log('Waiting done, dispatch action');

  //Dispatch action success
  yield put(incrementSagaSuccess(action.payload));
}
export default function* counterSaga() {
  console.log('counterSaga');
  console.log(incrementSaga(2).payload);

  yield takeLatest(incrementSaga.toString(), handleIncrementSaga);
}
