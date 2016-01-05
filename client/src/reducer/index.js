import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import time from './time'
import auth from './auth'

export default combineReducers(Object.assign({},
  time,
  auth,
  { routing: routeReducer }
))
