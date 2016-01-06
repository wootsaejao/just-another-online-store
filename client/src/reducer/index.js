import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import * as time from './time'
import * as auth from './auth'

export default combineReducers(Object.assign({},
  time,
  auth,
  { routing: routeReducer }
))
