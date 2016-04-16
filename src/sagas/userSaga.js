
import { take, call, put } from 'redux-saga/effects'
import { loadUserObject } from '../actions/userActions'
import { UserService } from '../services'
import { ACTION_TYPES } from '../actions/actionTypes'
var userService = new UserService;

export function* userSaga() {
  while(true) {
    yield take(ACTION_TYPES.USER_LOGIN_SUCCESSFUL)
    try {
      const user = yield call(userService.loadUser);
      yield put(loadUserObject(user));
    } catch(error) {
      console.log(error);
      // yield put(userLoginFailure(error));
    }
  }
}
