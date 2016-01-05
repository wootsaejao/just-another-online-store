import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import * as time from './time'

export default combineReducers(Object.assign({},
  time,
  { routing: routeReducer }
))
