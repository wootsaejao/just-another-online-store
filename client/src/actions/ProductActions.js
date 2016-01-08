import Promise from 'bluebird'
import $ from 'jquery'

import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE
} from '../actionTypes'

export function getTime(delay) {
  return {
    types: [GET_TIME_REQUEST, GET_TIME_SUCCESS, GET_TIME_FAILURE],
    promise: () => {
      return new Promise((resolve/*, reject*/) => {
        resolve({

        })
      })
    }
  }
}
