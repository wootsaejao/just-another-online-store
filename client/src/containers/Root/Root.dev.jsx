import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router'
import DevTools from '../DevTools';

export default class Root extends Component {
  render() {
    const { store, routes } = this.props;
    return (
      <Provider store={store}>
        <div>
          <ReduxRouter routes={routes} />
          <DevTools />
        </div>
      </Provider>
    );
  }
}
