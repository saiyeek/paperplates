import { takeEvery, takeLatest } from 'redux-saga'
import { call, put, take } from 'redux-saga/effects'


function logActions(action){
  console.log(action);
}
export function* root() {
  yield takeEvery("*", logActions);
}
