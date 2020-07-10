import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import _, { isEmpty } from 'lodash';
import { 
  Button, Container, Card, CardHeader, CardBody, Table,
  Row, Col, Form, Input, FormGroup, Label,
} from 'reactstrap';
import { Typeahead } from 'react-bootstrap-typeahead';

import classes from '../../data/classes';
import rewardTypes from '../../data/reward-types';
import locations from '../../data/locations';
import cities from '../../data/cities';
import factions from '../../data/factions';

const classArr = _.sortBy(Object.values(classes), 'name');
const rewardArr = _.sortBy(Object.values(rewardTypes), 'name');
const locationArr = Object.values(locations);
const cityArr = Object.values(cities);
const factionsArr = Object.values(factions);

const Questfinder = () => {
  const [selectedClass, setSelectedClass] = useState([]);
  const [selectedRewards, setSelectedRewards] = useState([]);
  const [selectedCities, setSelectedCities] = useState([...cityArr]);
  const [queryResults, setQueryResults] = useState([]);
  const [showOnlyBestResult, setShowOnlyBestResult] = useState(true);
  const [showRewardsColumn, setShowRewardsColumn] = useState(false);

  const toggleShowOnlyBestResult = () => setShowOnlyBestResult(!showOnlyBestResult);

  const factionSelectAll = (e, f, shouldAdd) => {
    setSelectedCities((shouldAdd) ? _.uniq([...f.starterCities, ...selectedCities]) : _.reject(selectedCities, c => f.starterCities.includes(c)));
    e.preventDefault();
  };

  const cityToggle = c => setSelectedCities(selectedCities.includes(c) ? _.without(selectedCities, c) : [...selectedCities, c]);

  const classQuery = () => selectedClass.map((c) => {
    const bonusLocations = locationArr.filter(l => c.questBonus.includes(l.type));
    const cityScores = _.reduce(selectedCities, (m, city) => {
      const score = _.intersection(bonusLocations, city.locations).length;
      if (score > 0) return [...m, { name: city.name, score }];
      return m;
    }, []);
    return {
      name: c.name,
      scores: _.sortBy(cityScores, city => city.score * -1),
    };
  });

  const rewardsQuery = () => selectedRewards.map((r) => {
    const bonusLocations = locationArr.filter(l => l.rewards.includes(r));
    const cityScores = _.reduce(selectedCities, (m, city) => {
      const score = _.intersection(bonusLocations, city.locations).length;
      if (score > 0) return [...m, { name: city.name, score }];
      return m;
    }, []);
    return {
      name: r.name,
      scores: _.sortBy(cityScores, city => city.score * -1),
    };
  });

  const fullQuery = () => selectedClass.map((c) => {
    const bonusLocations = locationArr.filter(l => c.questBonus.includes(l.type));
    const cityScores = _.reduce(selectedCities, (m, city) => {
      const cityBonusLocations = _.intersection(bonusLocations, city.locations);
      const rewards = _(cityBonusLocations)
        .map(cbl => _.intersection(cbl.rewards, selectedRewards))
        .flatten()
        .uniq()
        .value();
      if (rewards.length > 0) return [...m, { name: city.name, score: rewards.length, rewards }];
      return m;
    }, []);
    return {
      name: c.name,
      scores: _.sortBy(cityScores, city => city.score * -1),
    };
  });

  useEffect(() => {
    if (!selectedClass) return;
    let results = [];
    setShowRewardsColumn(false);
    if (!_.isEmpty(selectedClass) && _.isEmpty(selectedRewards)) {
      results = classQuery();
    } else if (isEmpty(selectedClass) && !_.isEmpty(selectedRewards)) {
      results = rewardsQuery();
    } else if (!isEmpty(selectedClass) && !_.isEmpty(selectedRewards)) {
      setShowRewardsColumn(true);
      results = fullQuery();
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
                <img src={f.flag} height="32" alt="Flag" />
                {` ${f.name}  `}
                <Button color="link" onClick={e => factionSelectAll(e, f, true)}>All</Button>
                {' | '}
                <Button color="link" onClick={e => factionSelectAll(e, f, false)}>None</Button>
              </CardHeader>
              <CardBody>
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
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
      <hr />
      <Row>
        <Col sm="4">
          <Row>
            <Col sm="12">
              <h4>Selections</h4>
              Classes
              <Typeahead
                id="class-typeahead"
                labelKey="name"
                multiple
                options={classArr}
                placeholder="Choose one or more classes..."
                onChange={setSelectedClass}
                className="mb-2"
              />
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              Rewards
              <Typeahead
                id="reward-typeahead"
                labelKey="name"
                options={rewardArr}
                multiple
                placeholder="Choose some quest objectives..."
                onChange={setSelectedRewards}
                className="mb-4"
              />
            </Col>
          </Row>
          <FormGroup check>
            <Input type="checkbox" onChange={() => toggleShowOnlyBestResult()} checked={showOnlyBestResult} />
            <Label check onClick={() => toggleShowOnlyBestResult()}><strong>Show only best result</strong></Label>
          </FormGroup>
        </Col>
        <Col sm={8}>
          <h4>Results</h4>
          <div>
            {_.isEmpty(queryResults) && 'No Results'}
            {!_.isEmpty(queryResults) && (
              <div>
                <Table>
                  <thead>
                    <tr>
                      <td>{_.isEmpty(selectedClass) ? 'Reward' : 'Class'}</td>
                      <td>City</td>
                      <td>Score</td>
                      {showRewardsColumn && <td>Rewards</td>}
                    </tr>
                  </thead>
                  <tbody>
                    {queryResults.map(cl => (
                      <Fragment key={cl.name}>
                        {showOnlyBestResult && (
                          <tr>
                            <td>{cl.name}</td>
                            <td>{_.isEmpty(cl.scores) ? 'No Result' : cl.scores[0].name}</td>
                            <td>{_.isEmpty(cl.scores) ? 'No Result' : cl.scores[0].score}</td>
                            {showRewardsColumn && <td>{_.isEmpty(cl.scores) ? 'No Result' : cl.scores[0].rewards.map(r => r.name).join(', ')}</td>}
                          </tr>
                        )}
                        {(!showOnlyBestResult && _.isEmpty(cl.scores)) && (
                          <tr>
                            <td>{cl.name}</td>
                            <td>No Result</td>
                            <td>No Result</td>
                          </tr>
                        )}
                        {!showOnlyBestResult && cl.scores.map((cs, i) => (
                          <tr className={i === 0 ? 'table-success' : ''}>
                            <td>{cl.name}</td>
                            <td>{cs.name}</td>
                            <td>{cs.score}</td>
                            {showRewardsColumn && <td>{_.isEmpty(cl.scores) ? 'No Result' : cl.scores[i].rewards.map(r => r.name).join(', ')}</td>}
                          </tr>
                        ))}
                      </Fragment>
                    ))}
                  </tbody>
                </Table>
              </div>
            )}
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
