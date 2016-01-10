import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as ProductActions from '../../actions/ProductActions'

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

    const productBox = (
      <div className="col-sm-4 col-lg-4 col-md-4">
        <div className="thumbnail">
          <img src="http://placehold.it/320x150" alt="" />
            <div className="caption">
              <h4 className="pull-right">$24.99</h4>
              <h4><a href="#">First Product</a>
            </h4>
            <p>See more snippets like this online store item at <a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p>
          </div>
          <div className="ratings">
            <p className="pull-right">15 reviews</p>
            <p>
              <span className="glyphicon glyphicon-star"></span>
              <span className="glyphicon glyphicon-star"></span>
              <span className="glyphicon glyphicon-star"></span>
              <span className="glyphicon glyphicon-star"></span>
              <span className="glyphicon glyphicon-star"></span>
            </p>
          </div>
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
              {this.props.products.map((item) =>
                productBox
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
