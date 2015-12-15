import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Homepage from './Homepage'

export default class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Homepage />
      </Provider>
    )
  }
}
