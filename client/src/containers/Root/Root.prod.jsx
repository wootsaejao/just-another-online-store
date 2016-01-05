import React, { Component } from 'react';
import { Provider } from 'react-redux';

export default class Root extends Component {
  render() {
    const { store, routes } = this.props;
    return (
      <Provider store={store}>
        {routes}
      </Provider>
    );
  }
}
