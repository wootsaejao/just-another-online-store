import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AuthActions from '../actions/AuthActions'

class Logout extends Component {

  componentDidMount = (/*prevProps, prevState*/) => {

    //
    // Do this way so user can logout via '/logout' url
    //

    this.props.actions.logout()
  }

  render() {
    return <p>You are now logged out.</p>
  }

}

function mapStateToProps(/*state*/) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AuthActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)
