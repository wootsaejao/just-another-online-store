import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'

import * as ProductActions from '../../actions/ProductActions'

class ProductColumn extends Component {
  render() {
    var product = this.props.product
    var description = product.description ||
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    var shortDescription = _.trunc(description, 80) // limit to 80 chars
    var imageUrl = !!this.props.product.image &&
      'data:image/png;base64,' + this.props.product.image ||
      'http://placehold.it/250x120'


    require('./Products.scss')
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

class Products extends Component {

  componentWillMount = () => {
    this.props.actions.getProducts()
  }

  render() {

    const sideBar = (
      <div>
        <p className="lead">Shop Name</p>
        <div className="list-group">
          <a href="#" className="list-group-item">Category 1</a>
          <a href="#" className="list-group-item">Category 2</a>
          <a href="#" className="list-group-item">Category 3</a>
        </div>
      </div>
    )

    return (
      <div className="container">
        <div className="row">

          <div className="col-md-3">
            {sideBar}
          </div>

          <div className="col-md-9">
            <div className="row">
              {this.props.products.map((product) =>
                <ProductColumn key={product._id} product={product} />
              )}
            </div>
          </div>

        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state._product.products
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ProductActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
