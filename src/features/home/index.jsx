import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Questfinder from '../questfinder/index';

const Home = () => (
  <Questfinder />
);

Home.defaultProps = { };

Home.propTypes = {};
  
const mapStateToProps = state => ({});
  
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
