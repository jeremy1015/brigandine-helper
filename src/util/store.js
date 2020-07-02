import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import questfinder from '../features/questfinder/reducer';

export const history = createHistory();
export default createStore(
  combineReducers({
    questfinder,
  }),
  applyMiddleware(routerMiddleware(history)),
);
