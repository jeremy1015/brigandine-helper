import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Container } from 'reactstrap';
import { Typeahead } from 'react-bootstrap-typeahead';

import classes from '../../data/classes';
import rewardTypes from '../../data/reward-types';
import locations from '../../data/locations';

const classArr = Object.values(classes);
const rewardArr = Object.values(rewardTypes);
const locationArr = Object.values(locations);

const containerStyle = {
  marginTop: '10px',
};

const Questfinder = () => {
  const [selectedClass, setSelectedClass] = useState([]);
  const [selectedReward, setSelectedReward] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);

  useEffect(() => {
    if (!(
      selectedClass 
      && selectedClass[0] 
      && selectedReward 
      && selectedReward[0])) {
      setSelectedLocations([]);
      return;
    }
    const locs = (_.filter(locationArr, 
      l => selectedClass[0].questBonus.includes(l.type) && l.rewards.includes(selectedReward[0])));
    console.log(locs);
    setSelectedLocations(locs);
  }, [selectedClass, selectedReward]);
  return (
    <Container style={containerStyle}>
      <h3>Quest Location Finder</h3>
      <p>Select a class, then if desired select a loot type. The questfinder will suggest the optimal locations for your questing.</p>
      <Typeahead
        id="class-typeahead"
        labelKey="name"
        multiple
        options={classArr}
        placeholder="Choose one or more classes..."
        onChange={setSelectedClass}
      />
      <ul>
        {(selectedClass && selectedClass[0]) && _.map(selectedClass[0].questBonus, q => (<li key={q.name}>{q.name}</li>))}
      </ul>
      <Typeahead
        id="reward-typeahead"
        labelKey="name"
        options={rewardArr}
        multiple
        placeholder="Choose some quest objectives..."
        onChange={setSelectedReward}
      />
      <hr />
      <div>
        <h3>Results</h3>
        {(!(selectedLocations && selectedLocations[0])) && 'No Results'}
        {(selectedLocations && selectedLocations[0]) && selectedLocations[0].name}
      </div>
    </Container>
  );
};

Questfinder.defaultProps = { };

Questfinder.propTypes = {};
  
const mapStateToProps = state => ({});
  
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Questfinder);
