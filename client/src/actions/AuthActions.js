import Promise from 'bluebird'
import jQuery from 'jquery'

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

function _login(email, password/*, cb*/) {
  const payload = {
    email: email,
    password: password
  }

  return new Promise((resolve, reject) => {

    jQuery.post('api/auth/login', payload)
      .done((result) => {
        resolve({
          authenticated: true,
          token: result.ssid
        })
      })
      .fail((error) => {
        reject({
          authenticated: false,
          message: error.responseJSON.message
        })
      })

  })
}

export function login(email, password) {
  return {
    types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
    promise: () => {
      return new Promise((resolve, reject) => {

        _login(email, password)
          .then((result) => {
            const token = result.token
            localStorage.onlineStoreSSID = token
            resolve({
              isLoggedIn: true,
              ssid: token
            })
          })
          .catch((error) => {
            reject({
              isLoggedIn: false,
              message: error.message
            })
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
        resolve({})
      })
    }
  }
}

export function checkAuth() {
  return {
    types: [CHECK_AUTH_REQUEST, CHECK_AUTH_SUCCESS, CHECK_AUTH_FAILURE],
    promise: () => {
      return new Promise((resolve, reject) => {

        if (!!localStorage.onlineStoreSSID) {
          resolve({
            ssid: localStorage.onlineStoreSSID
          })
        }

        else {
          reject({})
        }
      })
    }
  }
}
