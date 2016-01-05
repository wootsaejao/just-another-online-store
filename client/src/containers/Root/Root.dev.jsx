import React, { Component } from 'react';
import { Provider } from 'react-redux';
import DevTools from '../DevTools';

export default class Root extends Component {
  render() {
    const { store, routes } = this.props;
    console.log('root')
    console.log(this.props)
    return (
      <Provider store={store}>
        <div>
          {routes}
          <DevTools />
        </div>
      </Provider>
    );
  }
}
