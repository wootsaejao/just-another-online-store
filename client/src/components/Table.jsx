import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

export default class TableWidget extends Component {
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
            {this.props.products.map((product) => {
              return (
                <tr>
                  <td>{!!product.image && (
                    <img src={'data:image/png;base64,' + product.image} />
                  )}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    )
  }
}
