import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,

  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,

  CHECK_AUTH_REQUEST,
  CHECK_AUTH_SUCCESS,
  CHECK_AUTH_FAILURE
} from '../actionTypes'

const initialState = {}

export function _auth(state = initialState, action) {
  switch (action.type) {

    case LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        isLoggedIn: action.result.isLoggedIn,
        sid: action.result.sid,
        error: false,
        message: null
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        isLoggedIn: false,
        sid: null,
        error: true,
        message: action.error.message
      }

    case LOGOUT_REQUEST:
      return {
        ...state
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        error: false,
        isLoggedIn: false,
        sid: null
      }
    case LOGOUT_FAILURE:
      return {
        ...state,
        error: true,
        message: action.error.message
      }

    case CHECK_AUTH_REQUEST:
      return {
        ...state
      }
    case CHECK_AUTH_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        sid: action.result.sid,
        message: null
      }
    case CHECK_AUTH_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        sid: null,
        message: null
      }

    default:
      return state
  }
}
