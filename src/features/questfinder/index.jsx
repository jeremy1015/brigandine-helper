import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Container, Card, CardHeader, CardBody, CardTitle, ListGroup, ListGroupItem, ListGroupItemHeading, Row, Col } from 'reactstrap';
import { Typeahead } from 'react-bootstrap-typeahead';

import classes from '../../data/classes';
import rewardTypes from '../../data/reward-types';
import locations from '../../data/locations';
import cities from '../../data/cities';
import factions from '../../data/factions';

const classArr = Object.values(classes);
const rewardArr = Object.values(rewardTypes);
const locationArr = Object.values(locations);
const cityArr = Object.values(cities);
const factionsArr = Object.values(factions);

const containerStyle = {
  marginTop: '10px',
};

const Questfinder = () => {
  const locsByCity = cArray => _.reduce(locationArr, (m, location) => ({ ...m, [location.name]: _.filter(cArray, c => c.locations.includes(location)) }), {});
  const [selectedClass, setSelectedClass] = useState([]);
  const [selectedRewards, setSelectedRewards] = useState([]);
  const [selectedCities, setSelectedCities] = useState([...cityArr]);
  const [availableCities, setAvailableCities] = useState(locsByCity(cityArr));
  const [queryResults, setQueryResults] = useState([]);

  const cityToggle = (c) => {
    const newCities = selectedCities.includes(c) ? _.without(selectedCities, c) : [...selectedCities, c];
    setSelectedCities(newCities);
    setAvailableCities(locsByCity(newCities));
  };

  useEffect(() => {
    let results = [];

    if (!(selectedClass && selectedClass[0]) && (selectedRewards && selectedRewards[0])) {
      results = classArr.map(c => ({
        key: c.name,
        name: c.name,
        rewardResults: selectedRewards.map(r => ({
          key: r.name,
          name: r.name,
          locationMatches: locationArr.filter(l => c.questBonus.includes(l.type) && l.rewards.includes(r)),
        })),
      }));
    }
    if ((selectedClass && selectedClass[0]) && !(selectedRewards && selectedRewards[0])) {
      results = selectedClass.map(c => ({
        key: c.name,
        name: c.name,
        rewardResults: rewardArr.map(r => ({
          key: r.name,
          name: r.name,
          locationMatches: locationArr.filter(l => c.questBonus.includes(l.type) && l.rewards.includes(r)),
        })),
      }));
    }
    if (selectedClass && selectedClass[0] && selectedRewards && selectedRewards[0]) {
      results = selectedClass.map(c => ({
        key: c.name,
        name: c.name,
        rewardResults: selectedRewards.map(r => ({
          key: r.name,
          name: r.name,
          locationMatches: locationArr.filter(l => c.questBonus.includes(l.type) && l.rewards.includes(r)),
        })),
      }));
    }
    console.log(results);
    setQueryResults(results);
  }, [selectedClass, selectedRewards, selectedCities]);
  return (
    <Container style={containerStyle}>
      <h3 className="text-center">Quest Location Finder</h3>
      <hr />
      <Row>
        <Col sm="3">
          <h4>Cities</h4>
          <ListGroup>
            {factionsArr.map(f => (
              <Fragment key={f.name}>
                <ListGroupItem>
                  <ListGroupItemHeading>{f.name}</ListGroupItemHeading>
                </ListGroupItem>
                {f.starterCities.map(c => (
                  <ListGroupItem key={c.name} tag="a" href="#" onClick={() => cityToggle(c)} color={selectedCities.includes(c) ? 'success' : 'secondary'}>
                    {c.name}
                  </ListGroupItem>
                ))}
              </Fragment>
            ))}
          </ListGroup>
        </Col>
        <Col sm="9">
          <Row>
            <Col sm="12">
              <h4>Selections</h4>
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
            <Col sm="12">
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
                              <ListGroupItemHeading>{m.name}</ListGroupItemHeading>
                              {availableCities[m.name].map(city => (<ListGroupItem>{city.name}</ListGroupItem>))}
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
        </Col>
      </Row>
    </Container>
  );
};

Questfinder.defaultProps = { };

Questfinder.propTypes = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Questfinder);
