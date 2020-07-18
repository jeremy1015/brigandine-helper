import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import routes from './util/routes';
import Home from './features/home/index';
import QuestFinder from './features/questfinder/index';
import KnightBrowser from './features/knightbrowser/index';
import ClassChart from './features/classchart/index';

// This component handles all of the 404 error requests
const NoMatch = ({ location }) => (
  <div>
    You appear lost.
  </div>
);

const Routes = () => (
  <div>
    <Switch>
      <Route exact path={routes.root} component={Home} />
      <Route path={routes.questfinder} component={QuestFinder} />
      <Route path={routes.knightbrowser} component={KnightBrowser} />
      <Route path={routes.classchart} component={ClassChart} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

NoMatch.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default Routes;
