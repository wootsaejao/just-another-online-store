import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

import { ProductRow } from '../'

export default class ProductTable extends Component {
  render() {
    return (
      <div>
        <Table responsive>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) =>
              <ProductRow key={product._id} product={product} />
            )}
          </tbody>
        </Table>
      </div>
    )
  }
}
