import { ACTION_TYPES } from './actionTypes'

export function requestUserLogin(){
  return {
    type: ACTION_TYPES.REQUEST_USER_LOGIN
  }
};

export function userLoginSuccessful(user) {
  return {
    type: ACTION_TYPES.USER_LOGIN_SUCCESSFUL
  }
}

export function loadUserObject(user) {
  return {
    type: ACTION_TYPES.LOAD_USER,
    user
  }
}

export function userLoginFailure(err) {
  return {
    type: ACTION_TYPES.USER_LOGIN_FAILED,
    error: err
  }
}
