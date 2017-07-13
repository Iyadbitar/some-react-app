import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './store';

// import config from './config/config';

// import ParckingGarage from './components/ParckingGarage/ParckingGarage.component.jsx'

// import configAction from './actions/config.action';
// import eventsLoadAction from './actions/events-load.action';

class WidgetsShoppingApp extends React.Component {

  componentWillMount(){
    // reduce config object into store to be part of app state
    // store.dispatch(configAction(config));

    // dispatch event loading action
    // store.dispatch(eventsLoadAction());
  }


  render() {
    return <div className="app-wrapper">
      <h1>Widgets app</h1>
    </div>;
  }
}

render(<WidgetsShoppingApp />, document.getElementById('app-wrapper'));
