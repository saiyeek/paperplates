import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import { root } from './sagas/logger'
import { userSaga, userControlsSaga } from './sagas/userSaga'
import { menuSaga } from './sagas/menuSaga'
import { mealsSaga, currentMealSaga, makeReservationRequest } from './sagas/mealsSaga'
import { routerMiddleware } from 'react-router-redux'
import { hashHistory } from 'react-router'

const sagaMiddleware = createSagaMiddleware(
    root, userSaga, userControlsSaga,
    menuSaga, mealsSaga,
    currentMealSaga,
    makeReservationRequest
  )
const routeMiddleware = routerMiddleware(hashHistory);
export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware,routeMiddleware)
  )
}
