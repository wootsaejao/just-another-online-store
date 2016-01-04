import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router'

export default class Root extends Component {
  render() {
    const { store, routes } = this.props;
    return (
      <Provider store={store}>
        <ReduxRouter routes={routes} />
      </Provider>
    );
  }
}
