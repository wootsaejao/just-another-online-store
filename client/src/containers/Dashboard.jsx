import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import * as ProductActions from '../actions/ProductActions'

import Table from '../components/Table'

class Dashboard extends Component {

  componentWillMount = () => {
    this.props.actions.getProducts()
  }

  render() {
    return (
      <div>
        <div>I am a dashboard. You are logged in.</div>
        <Table products={this.props.products} />
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
