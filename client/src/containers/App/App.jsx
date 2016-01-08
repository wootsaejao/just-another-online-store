import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IndexLink } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'
import { bindActionCreators } from 'redux'
import {
  Nav,
  Navbar,
  NavItem
} from 'react-bootstrap'

import * as AuthActions from '../../actions/AuthActions'

class App extends Component {

  // componentWillMount = () => {
  //   console.log('checkAuth')
  //   this.props.actions.checkAuth()
  // }

  render() {
    const navbarInstance = (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLink to="/">Brand</IndexLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/about">
              <NavItem eventKey={1}>About</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )

    const footerInstant = (
      <Navbar>
        <Nav>
          {!this.props.isLoggedIn && (
            <LinkContainer to="/login">
              <NavItem eventKey={2}>Login</NavItem>
            </LinkContainer>
          )}
          {this.props.isLoggedIn && (
            <LinkContainer to="/dashboard">
              <NavItem eventKey={1}>Dashboard</NavItem>
            </LinkContainer>
          )}
          {this.props.isLoggedIn && (
            <LinkContainer to="/logout">
              <NavItem eventKey={1}>Log out</NavItem>
            </LinkContainer>
          )}
        </Nav>
      </Navbar>
    )

    require('./App.scss')
    return (
      <div className="app">
        {navbarInstance}
        <div className="container content">
          {this.props.children}
        </div>
        <footer className="footer">
          {footerInstant}
        </footer>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    isLoggedIn: state._auth.isLoggedIn
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AuthActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
