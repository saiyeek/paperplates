import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { MenuService } from '../services'

let menuService = new MenuService()
// worker Saga : will be fired on USER_FETCH_REQUESTED actions
function* fetchMenus(action) {
   try {
      const menus = yield call(menuService.fetchMenus);
      yield put({type: "MENU_LOAD_ALL_SUCCESS", menus: menus});
   } catch (e) {
      yield put({type: "MENU_LOAD_ALL_FAILED", message: e.message});
   }
}

/*
  starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action
  Allow concurrent fetches of user
*/
export function* menuSaga() {
  yield* takeEvery("MENU_LOAD_ALL_REQUEST", fetchMenus);
}
