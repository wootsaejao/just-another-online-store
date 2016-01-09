import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as AuthActions from '../actions/AuthActions'

class Login extends Component {

  handleSubmit = (event) => {
    event.preventDefault()

    // TODO: validate
    const email = this.refs.email.value
    const pass = this.refs.pass.value

    this.props.actions.login(email, pass)
  }

  render() {
    return (
      <div>
        {!this.props.isLoggedIn && (
          <form onSubmit={this.handleSubmit}>
            <label><input ref="email" placeholder="email" defaultValue="joe@example.com" /></label>
            <label><input ref="pass" placeholder="password" /></label> (hint: password1)<br />
            <button type="submit">login</button>
          </form>
        )}
        {this.props.isLoggedIn && (
          <p>You are now logged in.</p>
        )}
        {this.props.message && (
          <p>{this.props.message}</p>
        )}
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    isLoggedIn: state._auth.isLoggedIn,
    message: state._auth.message
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AuthActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
