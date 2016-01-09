import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE
} from '../constants/ActionTypes'

const initialState = {
  products: []
}

export function _product(state = initialState, action) {
  switch (action.type) {

    case GET_PRODUCT_REQUEST:
      return {
        ...state
      }
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.result
      }
    case GET_PRODUCT_FAILURE:
      return {
        ...state
      }

    default:
      return state
  }
}
