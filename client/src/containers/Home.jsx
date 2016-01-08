import React, { Component } from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

// import * as ProductActions from '../../actions/ProductActions'

class Home extends Component {
  render() {
    return (
      <div>Sup! I am home page.</div>
    )
  }
}

function mapStateToProps(/*state*/) {
  return {}
}

function mapDispatchToProps(/*dispatch*/) {
  return {
    // actions: bindActionCreators(ProductActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
