import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router'
import routes from './routes'

export default class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <ReduxRouter routes={routes} />
      </Provider>
    )
  }
}
