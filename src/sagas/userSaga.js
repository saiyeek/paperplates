
import { take, call, put } from 'redux-saga/effects'
import { loadUserObject, userLogoutSuccessful } from '../actions/userActions'
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
    yield take(ACTION_TYPES.REQUEST_USER_LOGOUT)
    try {
      yield call(userService.logoutUser);
      yield put(userLogoutSuccessful());
    } catch(error) {
      console.log(error);
    }
  }
}
