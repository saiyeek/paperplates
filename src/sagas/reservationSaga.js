import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { ReservationService } from '../services'

let reservationService = new ReservationService()
function* makeReservation(action) {
   try {
      const menus = yield call(reservationService.fetchMenus);
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
  yield* takeEvery("MAKE_RESERVATION", makeReservation);
}
