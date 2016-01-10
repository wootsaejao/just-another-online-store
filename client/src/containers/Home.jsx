import React, { Component } from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

// import * as ProductActions from '../../actions/ProductActions'

class Home extends Component {
  render() {
    return (
      <div>
        <p>
          Sup! I am home page. Here is some amazing promotion blah blah blah...
        </p>
      </div>
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
