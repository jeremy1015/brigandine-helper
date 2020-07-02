import React, { useState, useEffect, Fragment } from 'react';
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
  const [selectedRewards, setSelectedRewards] = useState([]);
  const [queryResults, setQueryResults] = useState([]);

  useEffect(() => {
    if (!(selectedClass && selectedClass[0] && selectedRewards && selectedRewards[0])) {
      setQueryResults([]);
      return;
    }
    const results = selectedClass.map(c => ({
      name: c.name,
      rewardResults: selectedRewards.map(r => ({
        name: r.name,
        locationMatches: _.filter(locationArr, l => c.questBonus.includes(l.type) && l.rewards.includes(r)),
      })),
    }));
    console.log(results);
    setQueryResults(results);
  }, [selectedClass, selectedRewards]);
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
        onChange={setSelectedRewards}
      />
      <hr />
      <div>
        <h3>Results</h3>
        {(!(queryResults && queryResults[0])) && 'No Results'}
        {(queryResults && queryResults[0]) 
          && queryResults.map(r => (
            <div>
              <h4>{r.name}</h4>
              <ul>
                {r.rewardResults.map(reward => (
                  <Fragment>
                    <li>{reward.name}</li>
                    <ul>
                      {reward.locationMatches.length === 0 && (<li>No Match Found!</li>)}
                      {reward.locationMatches.map(m => (<li>{m.name}</li>))}
                    </ul>
                  </Fragment>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </Container>
  );
};

Questfinder.defaultProps = { };

Questfinder.propTypes = {};
  
const mapStateToProps = state => ({});
  
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Questfinder);
