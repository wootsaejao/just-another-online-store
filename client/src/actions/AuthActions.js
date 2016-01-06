import Promise from 'bluebird'

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,

  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,

  UPDATE_AUTH_REQUEST,
  UPDATE_AUTH_SUCCESS,
  UPDATE_AUTH_FAILURE
} from '../actionTypes'

export function login(email, password) {
  return {
    types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
    promise: () => {
      return new Promise((resolve, reject) => {
        if (email === 'joe@example.com' && password === 'password1') {
          resolve({
            isLoggedIn: true
          })
        } else {
          reject({
            isLoggedIn: false,
            msg: 'Incorrect email and password.'
          })
        }
      })
    }
  }
}

export function logout() {
  return {
    types: [LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE],
    promise: () => {
      return new Promise((resolve/*, reject*/) => {
        resolve({
          isLoggedIn: false
        })
      })
    }
  }
}

export function updateAuth(loggedIn) {
  return {
    types: [UPDATE_AUTH_REQUEST, UPDATE_AUTH_SUCCESS, UPDATE_AUTH_FAILURE],
    promise: () => {
      return new Promise((resolve/*, reject*/) => {
        resolve({
          loggedIn: loggedIn
        })
      })
    }
  }
}
