import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { pushPath } from 'redux-simple-router'

class Logout extends Component {

  componentDidMount = (/*prevProps, prevState*/) => {
    setTimeout(() => this.props.actions.pushPath('/'), 2500)
  }

  render() {
    return <p>You are now logged out. Redirecting to homepage...</p>

  }

}

function mapStateToProps(/*state*/) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ pushPath }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)
