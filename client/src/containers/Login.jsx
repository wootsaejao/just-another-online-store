import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as AuthActions from '../actions/AuthActions'

class Login extends Component {

  handleSubmit = (event) => {
    event.preventDefault()

    const email = this.refs.email.value
    const pass = this.refs.pass.value
    this.props.actions.login(email, pass)
  }

  // componentWillMount = (props) => {
  //   console.log(props.history)
  //   // if (!!props.isLoggedIn) {
  //   //   // props.routing.replace()
  //   // }
  // }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label><input ref="email" placeholder="email" defaultValue="joe@example.com" /></label>
        <label><input ref="pass" placeholder="password" /></label> (hint: password1)<br />
        <button type="submit">login</button>
        {this.props.isLoggedIn && (
          <p>You are logged in.</p>
        ) || (
          <p>You are NOT logged in.</p>
        )}
        {this.props.error && (
          <p>Bad login  information</p>
        )}
      </form>
    )
  }

}

function mapStateToProps(state) {
  return {
    isLoggedIn: state._auth.isLoggedIn,
    error: state._auth.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AuthActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
