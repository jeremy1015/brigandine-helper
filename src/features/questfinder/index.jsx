import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Container } from 'reactstrap';

import classes from '../../data/classes';

const Questfinder = () => (
  <Container>
    <h2>Quest Finder</h2>
    <p>Select a class, then if desired select a loot type. The questfinder will suggest the optimal locations for your questing.</p>
    { _.map(classes, c => (
      <div key={c.name}>
        <h4>{c.name}</h4>
        {_.map(c.questBonus, q => (<p key={q.name}>{q.name}</p>))}
      </div>
    )) }
  </Container>
);

Questfinder.defaultProps = { };

Questfinder.propTypes = {};
  
const mapStateToProps = state => ({});
  
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Questfinder);
