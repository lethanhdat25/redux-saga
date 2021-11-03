import { takeEvery, takeLatest } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";

export function* Log(action:PayloadAction){
    console.log('LOG',action);
    
}
export default function* counterSaga(){
    console.log('counterSaga');
    yield takeLatest('*',Log);
}