import Promise from 'bluebird'

export function updateAuth(loggedIn) {
  console.log('AuthActions.updateAuth()')
  return {
    types: ['UPDATE_AUTH_REQUEST', 'UPDATE_AUTH_SUCCESS', 'UPDATE_AUTH_FAILURE'],
    promise: () => {
      return new Promise((resolve, reject) => {
        resolve({
          loggedIn: loggedIn
        })
      })
    }
  }
}
