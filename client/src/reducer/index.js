import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'

import * as auth from './auth'
import * as product from './product'

export default combineReducers(Object.assign({},
  auth,
  product,
  { routing: routeReducer }
))
