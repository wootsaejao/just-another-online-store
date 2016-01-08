import Promise from 'bluebird'
import $ from 'jquery'

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

    $.post('api/auth/login', payload)
      .done((result) => {
        resolve({
          token: result.sid
        })
      })
      .fail((error) => {
        reject({
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
            localStorage.onlineStoreSID = token
            resolve()
          })
          .catch((error) => {
            reject({
              message: error.message
            })
          })

      })
    }
  }
}

function _logout() {
  return new Promise((resolve, reject) => {

    $.get('api/auth/logout')
      .done((/*result*/) => {
        resolve()
      })
      .fail((error) => {
        reject({
          message: error.responseJSON.message
        })
      })

  })
}

export function logout() {
  return {
    types: [LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE],
    promise: () => {
      return new Promise((resolve, reject) => {

        _logout()
          .then((/*result*/) => {
            delete localStorage.onlineStoreSID
            resolve()
          })
          .catch((error) => {
            reject({
              message: error.message
            })
          })

      })
    }
  }
}

function _checkAuth(sid) {
  return new Promise((resolve, reject) => {

    $.post('api/auth/check', { sid: sid })
      .done((/*result*/) => {
        resolve()
      })
      .fail((error) => {
        reject({
          message: error.responseJSON.message
        })
      })

  })
}

export function checkAuth() {
  return {
    types: [CHECK_AUTH_REQUEST, CHECK_AUTH_SUCCESS, CHECK_AUTH_FAILURE],
    promise: () => {
      return new Promise((resolve, reject) => {

        const sid = localStorage.onlineStoreSID || null

        _checkAuth(sid)
          .then((/*result*/) => {
            resolve()
          })
          .catch((error) => {
            delete localStorage.onlineStoreSID
            reject({
              message: error.message
            })
          })

      })
    }
  }
}
