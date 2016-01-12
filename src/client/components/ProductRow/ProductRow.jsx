import React, { Component } from 'react'

export default class ProductRow extends Component {
  render() {
    require('./ProductRow.scss')

    var imageUrl = !!this.props.product.image && 'data:image/png;base64,' + this.props.product.image || 'http://placehold.it/140x140'

    return (
      <tr className="ProductRow">
        <td>
          <img src={imageUrl} />
        </td>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
        <td>{this.props.product.category}</td>
      </tr>
    )
  }
}
