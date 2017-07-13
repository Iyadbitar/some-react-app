import React from 'react';
import { render } from 'react-dom';

import styles from '../css/defaults.css';
import { Provider } from 'react-redux';
import store from './store';

// import config from './config/config';

import {WidgetsShopping} from './components';

// import configAction from './actions/config.action';
// import eventsLoadAction from './actions/events-load.action';

class App extends React.Component {

  componentWillMount(){
    // reduce config object into store to be part of app state
    // store.dispatch(configAction(config));

    // dispatch event loading action
    // store.dispatch(eventsLoadAction());
  }


  render() {
    return <Provider store={store}>
      <WidgetsShopping />
    </Provider>
  }
}

render(<App />, document.getElementById('app-wrapper'));
