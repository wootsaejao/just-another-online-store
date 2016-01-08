
const initialState = {}

export function _product(state = initialState, action) {
  switch (action.type) {

    case GET_PRODUCT_REQUEST:
      return {
        ...state
      }
    case GET_PRODUCT_SUCCESS:
      return {
        ...state
      }
    case GET_PRODUCT_FAILURE:
      return {
        ...state
      }

    default:
      return state
  }
}
