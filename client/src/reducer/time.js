//
// This file is for referencing purpose, grab from redux-tutorial
//

import {
  GET_TIME_REQUEST,
  GET_TIME_SUCCESS,
  GET_TIME_FAILURE
} from '../actionTypes'

const initialState = {
  time: null,
  testPropFromTime: 2
}

export function _time(state = initialState, action) {
  switch (action.type) {
    case GET_TIME_REQUEST:
      return {
        ...state,
        frozen: true
      }
    case GET_TIME_SUCCESS:
      return {
        ...state,
        time: action.result.time,
        frozen: false
      }
    case GET_TIME_FAILURE:
      // we could add an error message here, to be printed somewhere in our application
      return {
        ...state,
        frozen: false
      }
    default:
      return state
  }
}
