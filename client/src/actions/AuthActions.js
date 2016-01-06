import Promise from 'bluebird'

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

function pretendRequest(email, pass, cb) {
  setTimeout(() => {
    if (email === 'joe@example.com' && pass === 'password1') {
      cb({
        authenticated: true,
        token: Math.random().toString(36).substring(7)
      })
    }

    else {
      cb({
        authenticated: false,
        message: 'Cannot authenticate.'
      })
    }

  }, 0)
}

export function login(email, password) {
  return {
    types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
    promise: () => {
      return new Promise((resolve, reject) => {
        pretendRequest(email, password, (response) => {
          if (!!response.authenticated) {
            const token = response.token
            localStorage.onlineStoreSSID = token
            resolve({
              isLoggedIn: true,
              ssid: token
            })
          }

          else {
            reject({
              isLoggedIn: false,
              message: response.message
            })
          }
        })
      })
    }
  }
}

export function logout() {
  return {
    types: [LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE],
    promise: () => {
      return new Promise((resolve/*, reject*/) => {
        delete localStorage.onlineStoreSSID
        resolve({
          isLoggedIn: false
        })
      })
    }
  }
}

export function checkAuth() {
  console.log('checkAuth')
  console.log(localStorage.onlineStoreSSID)
  return {
    types: [CHECK_AUTH_REQUEST, CHECK_AUTH_SUCCESS, CHECK_AUTH_FAILURE],
    promise: () => {
      return new Promise((resolve, reject) => {

        if (!!localStorage.onlineStoreSSID) {
          resolve({
            ssid: localStorage.onlineStoreSSID
          })
        }

        reject({})
      })
    }
  }
}
