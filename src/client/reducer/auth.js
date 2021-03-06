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
} from '../constants/ActionTypes'

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
        isLoggedIn: true,
        error: false,
        message: null
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        isLoggedIn: false,
        error: true,
        message: action.error.message
      }

    case LOGOUT_REQUEST:
      return {
        ...state,
        loggingOut: true
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggingOut: false,
        error: false,
        isLoggedIn: false
      }
    case LOGOUT_FAILURE:
      return {
        ...state,
        loggingOut: false,
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
        message: null
      }
    case CHECK_AUTH_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        message: null
      }

    default:
      return state
  }
}
