import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { ProductColumn } from '../../components'
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
