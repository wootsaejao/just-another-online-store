import Promise from 'bluebird'

export function updateAuth(loggedIn) {
  return {
    types: ['UPDATE_AUTH_REQUEST', 'UPDATE_AUTH_SUCCESS', 'UPDATE_AUTH_FAILURE'],
    promise: () => {
      return new Promise((resolve/*, reject*/) => {
        resolve({
          loggedIn: loggedIn
        })
      })
    }
  }
}

export function login(email, password) {
  console.log(email)
  console.log(password)
  return {
    types: ['LOGIN_REQUEST', 'LOGIN_SUCCESS', 'LOGIN_FAILURE'],
    promise: () => {
      return new Promise((resolve, reject) => {
        if (email === 'joe@example.com' && password === 'password1') {
          console.log('correct')
          resolve({
            isLoggedIn: true
          })
        } else {
          console.log('incorrect')
          reject({
            isLoggedIn: false,
            msg: 'Incorrect email and password.'
          })
        }
      })
    }
  }
}
