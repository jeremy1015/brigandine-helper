import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import store, { history } from './util/store';
import NavigationBar from './features/navigation/index';
import Routes from './routes';
import './img/favicon.ico';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/brigandine-helper/" history={history}>
      <div>
        <NavigationBar />
        <Routes />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);

export default store;
