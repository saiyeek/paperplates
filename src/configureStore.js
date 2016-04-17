import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import { root } from './sagas/logger'
import { userSaga, userControlsSaga } from './sagas/userSaga'
import { menuSaga } from './sagas/menuSaga'
import { mealsSaga } from './sagas/mealsSaga'

const sagaMiddleware = createSagaMiddleware(
    root, userSaga, userControlsSaga,
    menuSaga, mealsSaga)

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  )
}
