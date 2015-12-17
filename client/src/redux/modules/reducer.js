import { combineReducers } from 'redux'
import { routerStateReducer } from 'redux-router'
import time from './time'

export default combineReducers({
  router: routerStateReducer,
  time
})
