import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,

  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,

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
        ssid: action.result.ssid,
        error: false,
        message: 'You are now logged in. Redirecting to dashboard...'
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        isLoggedIn: false,
        ssid: null,
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
        isLoggedIn: action.result.isLoggedIn,
        ssid: null,
        message: null
      }
    // case LOGOUT_FAILURE:
    //   return {
    //     ...state,
    //     error: true
    //   }

    case CHECK_AUTH_REQUEST:
      return {
        ...state
      }
    case CHECK_AUTH_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        ssid: action.result.ssid
      }
    case CHECK_AUTH_FAILURE:
      return {
        ...state,
        isLoggedIn: false
      }

    default:
      return state
  }
}
