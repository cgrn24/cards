import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import ThunkMiddleware from 'redux-thunk'
import { testReducer } from './testReducer'

const rootReducer = combineReducers(testReducer)

export const store = legacy_createStore(rootReducer, applyMiddleware(ThunkMiddleware))
