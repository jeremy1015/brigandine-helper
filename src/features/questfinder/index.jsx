import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Container, Card, CardHeader, CardBody, CardTitle, ListGroup, ListGroupItem, ListGroupItemHeading, Row, Col } from 'reactstrap';
import { Typeahead } from 'react-bootstrap-typeahead';

import classes from '../../data/classes';
import rewardTypes from '../../data/reward-types';
import locations from '../../data/locations';
import cities from '../../data/cities';

const classArr = Object.values(classes);
const rewardArr = Object.values(rewardTypes);
const locationArr = Object.values(locations);
const cityArr = Object.values(cities);

const citiesForLocations = _.reduce(locationArr, (m, location) => ({ ...m, [location.name]: _.filter(cityArr, c => c.locations.includes(location)) }), {}); 

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
      <Row>
        <Col sm="6">
          <Typeahead
            id="class-typeahead"
            labelKey="name"
            multiple
            options={classArr}
            placeholder="Choose one or more classes..."
            onChange={setSelectedClass}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="6">
          <Typeahead
            id="reward-typeahead"
            labelKey="name"
            options={rewardArr}
            multiple
            placeholder="Choose some quest objectives..."
            onChange={setSelectedRewards}
          />
        </Col>
      </Row>
      <hr />
      <div>
        {(!(queryResults && queryResults[0])) && 'No Results'}
        {(queryResults && queryResults[0]) 
          && queryResults.map(r => (
            <div>
              <h3>{r.name}</h3>
              <Row>
                {r.rewardResults.map(reward => (
                  <Col md="4">
                    <Card>
                      <CardHeader tag="h4">{reward.name}</CardHeader>
                      <CardBody>
                        {reward.locationMatches.length === 0 && (<CardTitle>No Match Found!</CardTitle>)}
                        {reward.locationMatches.map(m => (
                          <Fragment>
                            <ListGroup flush>
                              <ListGroupItemHeading>Quest Site - {m.name}</ListGroupItemHeading>
                              {citiesForLocations[m.name].map(city => (<ListGroupItem>{city.name}</ListGroupItem>))}
                            </ListGroup>
                          </Fragment>
                        ))}
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
              <hr />
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
