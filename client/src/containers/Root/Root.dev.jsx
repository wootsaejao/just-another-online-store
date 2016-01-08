import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Provider } from 'react-redux';
import { bindActionCreators } from 'redux'

import DevTools from '../DevTools';
import * as AuthActions from '../../actions/AuthActions'

export default class Root extends Component {

  componentWillMount = () => {
    console.log('rootWillMount')
    this.props.actions.checkAuth()
  }

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

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AuthActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Root)
