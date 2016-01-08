import Promise from 'bluebird'
import $ from 'jquery'

import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE
} from '../actionTypes'

export function getProducts() {
  return {
    types: [GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE],
    promise: () => {
      return new Promise((resolve, reject) => {

        $.get('api/products?includeImage=true')
          .then((result) => {
            resolve(result)
          })
          .fail((error) => {
            reject(error)
          })

      })
    }
  }
}
