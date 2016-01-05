import React, { Component } from 'react'
import { connect } from 'react-redux'
import { IndexLink } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'
import { connect } from 'react-redux'
import {
  Nav,
  Navbar,
  NavItem
} from 'react-bootstrap'

import auth from '../../lib/auth'
import * as TimeActions from '../../actions/TimeActions'
import * as AuthActions from '../../actions/AuthActions'

class App extends Component {

  componentWillMount() {
    auth.onChange = this.props.actions.updateAuth
  }

  handleClick = event => {
    console.log(event)
    this.props.actions.updateAuth(true)
    console.log(this.props)
  }

  render() {
    console.log('app')
    console.log(this.props)
    const navbarInstance = (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLink to="/">Brand</IndexLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/dashboard">
              <NavItem eventKey={1}>Dashboard</NavItem>
            </LinkContainer>
            <LinkContainer to="/about">
              <NavItem eventKey={1}>About</NavItem>
            </LinkContainer>
            <LinkContainer to="/login">
              <NavItem eventKey={2}>Login</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )

    require('./App.scss')
    return (
      <div className="app">
        {navbarInstance}
        <div className="container children">
          {this.props.children}
        </div>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    testProp: false,
    testPropFromTime: state.time.testPropFromTime,
    time: state.time.time
  }
}

export default connect(mapStateToProps, TimeActions, AuthActions)(App)
