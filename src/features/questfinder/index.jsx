import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { 
  Button, Container, Card, CardHeader, CardBody, CardTitle, CardText, ListGroup, 
  ListGroupItem, ListGroupItemHeading, Row, Col, Form, Input, FormGroup, Label,
} from 'reactstrap';
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

const Questfinder = () => {
  const locsByCity = cArray => locationArr.reduce((m, location) => ({ ...m, [location.name]: cArray.filter(c => c.locations.includes(location)) }), {});
  const [selectedClass, setSelectedClass] = useState([]);
  const [selectedRewards, setSelectedRewards] = useState([]);
  const [selectedCities, setSelectedCities] = useState([...cityArr]);
  const [availableCities, setAvailableCities] = useState(locsByCity(cityArr));
  const [queryResults, setQueryResults] = useState([]);

  const factionSelectAll = (e, f, shouldAdd) => {
    const newCities = (shouldAdd) ? _.uniq([...f.starterCities, ...selectedCities]) : _.reject(selectedCities, c => f.starterCities.includes(c));
    setSelectedCities(newCities);
    setAvailableCities(locsByCity(newCities));
    e.preventDefault();
  };

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
    setQueryResults(results);
  }, [selectedClass, selectedRewards, selectedCities]);
  return (
    <Container fluid className="mt-3 pl-3 pr-3">
      <h3 className="text-center">Quest Location Finder</h3>
      <Row>
        {factionsArr.map(f => (
          <Col key={f.name} xs="4" className="mb-2">
            <Card>
              <CardHeader>
                {`${f.name}  `}
                <Button color="link" onClick={e => factionSelectAll(e, f, true)}>All</Button>
                <Button color="link" onClick={e => factionSelectAll(e, f, false)}>None</Button>
              </CardHeader>
              <CardBody>
                <CardText>
                  <Form>
                    <Row>
                      {_.sortBy(f.starterCities, 'name').map(c => (
                        <Col key={c.name} xs={4}>
                          <FormGroup check>
                            <Input type="checkbox" onChange={event => cityToggle(c)} checked={selectedCities.includes(c)} /> 
                            <Label check onClick={() => cityToggle(c)}>{` ${c.name}`}</Label>
                          </FormGroup>
                        </Col>
                      ))}
                    </Row>
                  </Form>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <Col sm="4">
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
        </Col>
        <Col sm={8}>
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
