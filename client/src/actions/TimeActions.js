import Promise from 'bluebird'

import {
  GET_TIME_REQUEST,
  GET_TIME_SUCCESS,
  GET_TIME_FAILURE
} from '../actionTypes'

export function getTime(delay) {
  return {
    types: [GET_TIME_REQUEST, GET_TIME_SUCCESS, GET_TIME_FAILURE],
    promise: () => {
      return new Promise((resolve/*, reject*/) => {
        // We can do anything we want, and finish with resolve()
        // or handle error with reject()
        
        // Just simulating an async request to a server via a setTimeout
        setTimeout(() => {
          const d = new Date()
          const ms = ('000' + d.getMilliseconds()).slice(-3)
          resolve({
            time: `${d.toString().match(/\d{2}:\d{2}:\d{2}/)[0]}.${ms}`
          })
        }, delay)
      })
    }
  }
}
