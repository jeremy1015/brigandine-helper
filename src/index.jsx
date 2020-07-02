import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import store, { history } from './util/store';
import NavigationBar from './features/navigation/index';
import Routes from './routes';
import './img/favicon.ico';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <NavigationBar />
        <Routes />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app'),
);

export default store;
