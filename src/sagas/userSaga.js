
import { take, call, put } from 'redux-saga/effects'
import { loadUserObject } from '../actions/userActions'
import { UserService } from '../services'
import { ACTION_TYPES } from '../actions/actionTypes'

function* authorize(user, password) {
  try {
    const token = yield call(Api.authorize, user, password)
    yield put({type: 'LOGIN_SUCCESS', token})
    return token
  } catch(error) {
    yield put({type: 'LOGIN_ERROR', error})
  }
}

function* loginFlow() {
  while(true) {
    yield take(ACTION_TYPES.USER_LOGIN_SUCCESSFUL)
    try {
      const user = yield call(UserService.loadUser);
      yield put(loadUserObject(user));
    } catch(error) {
      yield put(userLoginFailure(error));
    }
  }
}
