import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { pushPath } from 'redux-simple-router'

import * as AuthActions from '../actions/AuthActions'

class Login extends Component {

  componentDidUpdate = (/*prevProps, prevState*/) => {
    if (!!this.props.isLoggedIn) {
      setTimeout(() => this.props.actions.pushPath('/dashboard'), 2500)
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const email = this.refs.email.value
    const pass = this.refs.pass.value

    this.props.actions.login(email, pass)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label><input ref="email" placeholder="email" defaultValue="joe@example.com" /></label>
        <label><input ref="pass" placeholder="password" /></label> (hint: password1)<br />
        <button type="submit">login</button>
        {this.props.isLoggedIn && (
          <p>You are now logged in. Redirecting to dashboard...</p>
        )}
        {this.props.message && (
          <p>{this.props.message}</p>
        )}
      </form>
    )
  }

}

function mapStateToProps(state) {
  return {
    isLoggedIn: state._auth.isLoggedIn,
    error: state._auth.error,
    message: state._auth.message
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, AuthActions, { pushPath }), dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
