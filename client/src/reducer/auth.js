// import auth from '../lib/auth'

const initialState = {
  loggedIn: false
}

export function _auth(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_AUTH_REQUEST':
      return {
        ...state,
        frozen: true
      }
    case 'UPDATE_AUTH_SUCCESS':
      return {
        ...state,
        loggedIn: action.result.loggedIn,
        frozen: false
      }
    case 'UPDATE_AUTH_FAILURE':
      return {
        ...state,
        frozen: false
      }
    default:
      // return state
      return {
        ...state,
        testDefaultAuth: false
      }
  }
}
