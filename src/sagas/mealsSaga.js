import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { MealService, ReservationService } from '../services'
import { loadMealSuccess } from '../actions/mealActions'

let mealService = new MealService()

let reservationService = new ReservationService();
function* fetchMeals(action) {
   try {
      let meals = yield call(mealService.fetchMeals);
      yield put({type: "MEALS_LOAD_ALL_SUCCESS", meals});
   } catch (e) {
      yield put({type: "MEALS_LOAD_ALL_FAILED", message: e.message});
   }
}

export function* mealsSaga() {
  yield* takeEvery("MEALS_LOAD_ALL_REQUEST", fetchMeals);
}

function* fetchCurrentMeal(action) {
  try {
    let currentMeal = yield call(mealService.fetchMeal, action.mealId);
    yield put(loadMealSuccess(currentMeal))
  } catch(e) {
      yield put({type: "LOAD_MEAL_FAILURE", message: e.message})
  }
}
export function* currentMealSaga() {
  yield* takeEvery("REQUEST_LOAD_MEAL", fetchCurrentMeal)
}

function* callReservationService(action) {
  try{
    let reservation = yield call(reservationService.makeReservation, action.mealId);
    alert("You have successfully made your reservation!")
    yield put({type: "MAKE_RESERVATION_SUCCESS"})
  } catch(e) {
    yield put({type: "MAKE_RESERVATION_FAILED", message: e.message})
  }
}


export function* makeReservationRequest() {
  yield* takeEvery("MAKE_RESERVATION_REQUEST", callReservationService)
}
