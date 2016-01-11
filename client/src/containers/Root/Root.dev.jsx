import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux';

import DevTools from '../DevTools';
import * as AuthActions from '../../actions/AuthActions'

class Root extends Component {

  componentWillMount = () => {
    this.props.actions.checkAuth()
  };

  render() {
    const { store, routes } = this.props;
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

function mapStateToProps(/*state*/) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AuthActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Root)
