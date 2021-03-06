import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as ProductActions from '../actions/ProductActions'

import { ProductTable } from '../components'

class Dashboard extends Component {

  componentWillMount = () => {
    this.props.actions.getProducts()
  };

  render() {
    return (
      <div>
        <ProductTable products={this.props.products} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
