import React, { Component } from 'react'
import _ from 'lodash'

export default class ProductColumn extends Component {
  render() {
    require('./ProductColumn.scss')

    var product = this.props.product
    var description = product.description ||
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    var shortDescription = _.trunc(description, 80) // limit to 80 chars
    var imageUrl = !!this.props.product.image &&
      'data:image/png;base64,' + this.props.product.image ||
      'http://placehold.it/250x120'

    return (
      <div className="col-sm-4 col-lg-4 col-md-4">
        <div className="ProductColumn thumbnail">
          <img src={imageUrl} alt="" />
          <div className="caption">
            <h4 className="pull-right">${product.price}</h4>
            <h4 className="ProductName"><a href="#">{product.name}</a></h4>
            <p className="ProductDescription">{shortDescription}</p>
          </div>
          <div className="ratings">
            <p className="pull-right">15 reviews</p>
            <p>
              <span className="glyphicon glyphicon-star"></span>
              <span className="glyphicon glyphicon-star"></span>
              <span className="glyphicon glyphicon-star"></span>
              <span className="glyphicon glyphicon-star"></span>
              <span className="glyphicon glyphicon-star-empty"></span>
            </p>
          </div>
        </div>
      </div>
    )
  }
}
