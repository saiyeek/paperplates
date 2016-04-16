import ACTIONS from './actionTypes'

export function requestUserLogin(){
  return {
    type: ACTIONS.REQUEST_USER_LOGIN
  }
};

export function userLoginSuccessful(user) {
  return {
    type: ACTIONS.USER_LOGIN_SUCCESSFUL,
    user
  }
}

export function userLoginFailure(err) {
  return {
    type: ACTIONS.USER_LOGIN_FAILED
    error: err
  }
}
