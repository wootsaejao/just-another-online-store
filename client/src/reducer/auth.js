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

const initialState = {
  isLoggedIn: false
}

export function _auth(state = initialState, action) {
  switch (action.type) {

    case LOGIN_REQUEST:
      return {
        ...state,
        frozen: true
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: action.result.isLoggedIn,
        error: false,
        frozen: false
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        error: true,
        frozen: false
      }

    case LOGOUT_REQUEST:
      return {
        ...state,
        frozen: true
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: action.result.isLoggedIn,
        error: false,
        frozen: false
      }
    case LOGOUT_FAILURE:
      return {
        ...state,
        error: true,
        frozen: false
      }

    case CHECK_AUTH_REQUEST:
      return {
        ...state,
        frozen: true
      }
    case CHECK_AUTH_SUCCESS:
      return {
        ...state,
        isLoggedIn: action.result.isLoggedIn,
        frozen: false
      }
    case CHECK_AUTH_FAILURE:
      return {
        ...state,
        frozen: false
      }

    default:
      return state
  }
}
