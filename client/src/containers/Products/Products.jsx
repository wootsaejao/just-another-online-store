import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as ProductActions from '../../actions/ProductActions'

class Products extends Component {

  componentWillMount = () => {
    this.props.actions.getProducts()
  }

  render() {
    return (
      <div>
        products container
        {this.props.products.map((item) =>
          <div>{JSON.stringify(item.name)}</div>
        )}
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
