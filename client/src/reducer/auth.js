// import auth from '../lib/auth'

const initialState = {
  isLoggedIn: false
}

export function _auth(state = initialState, action) {
  switch (action.type) {

    case 'LOGIN_REQUEST':
      return {
        ...state,
        frozen: true
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoggedIn: action.result.isLoggedIn,
        error: false,
        frozen: false
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        error: true,
        frozen: false
      }

    case 'UPDATE_AUTH_REQUEST':
      return {
        ...state,
        frozen: true
      }
    case 'UPDATE_AUTH_SUCCESS':
      return {
        ...state,
        isLoggedIn: action.result.isLoggedIn,
        frozen: false
      }
    case 'UPDATE_AUTH_FAILURE':
      return {
        ...state,
        frozen: false
      }

    default:
      return state
  }
}
