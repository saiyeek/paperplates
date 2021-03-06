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

export function requestUserLogout() {
  return {
    type: ACTION_TYPES.REQUEST_USER_LOGOUT
  }
}

export function userLogoutSuccessful() {
  return {
    type: ACTION_TYPES.USER_LOGOUT_SUCCESSFUL
  }
}


export function isUserLoggedIn() {
  return {
    type: ACTION_TYPES.IS_USER_LOGGED_IN
  }
}



// User Controls
export function requestBeHost(userId) {
  return {
    type: "USER_BE_HOST_REQUESTED",
    userId
  }
}
