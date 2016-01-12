import { expect } from 'chai'

import * as ProductActions from '../../../src/client/actions/ProductActions'
import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE
} from '../../../src/client/constants/ActionTypes'

describe('actions', () => {
  it('test sample', (done) => {
    const expectedAction = {
      types: [GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE],
    }
    expect(ProductActions.getProducts().types.length).to.equal(expectedAction.types.length)
    done()
  })
})
