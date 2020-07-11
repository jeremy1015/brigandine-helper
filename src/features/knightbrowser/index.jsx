import React, { useState, useEffect, Fragment } from 'react';
import {
  Form, Container, FormGroup, Table,
  Row, Col, UncontrolledAlert,
} from 'reactstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/pro-solid-svg-icons';
import _ from 'lodash';
import { connect } from 'react-redux';
import knights from '../../data/knights';
import factions from '../../data/factions';

const factionsArr = Object.values(factions);
const knightsArr = Object.values(knights);

const pt = { cursor: 'pointer' };

const knightProps = {
  name: { name: 'Name', prop: 'name' },
  faction: { name: 'Faction', prop: 'faction.name' },
  startingClass: { name: 'Start Class', prop: 'startingClass.name' },
  startingLevel: { name: 'Start Level', prop: 'startingLevel' },
  growth: { name: 'Growth', prop: 'growth' },
  growthRate: { name: 'Growth Rate', prop: 'growthRate' },
  startingHP: { name: 'Start HP', prop: 'startingHP' },
  attack: { name: 'ATK', prop: 'attack' },
  defense: { name: 'DEF', prop: 'defense' },
  str: { name: 'STR', prop: 'str' },
  int: { name: 'INT', prop: 'int' },
  agi: { name: 'AGI', prop: 'agi' },
  manaPool: { name: 'Pool', prop: 'manaPool' },
  mmp30: { name: 'Median Pool 30', prop: 'maxManaPool' },
  runeArea: { name: 'Rune Area', prop: 'runeArea' },
};

const knightPropsArr = Object.values(knightProps);

const Knightbrowser = () => {
  const [displayedKnights, setDisplayedKnights] = useState([...knightsArr]);
  const [sortProp, setSortProp] = useState(knightPropsArr[0]);
  const [sortOrder, setSortOrder] = useState('asc');

  const [selectedFactions, setSelectedFactions] = useState([]);

  const order = (prop) => {
    if (prop === sortProp) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
      return;
    }
    setSortProp(prop);
    setSortOrder('asc');
  };

  const filterKnights = () => {
    const fToUse = _.isEmpty(selectedFactions) ? factionsArr : selectedFactions;
    return knightsArr.filter(k => fToUse.includes(k.faction));
  };

  const sortKnights = (kArr) => {
    if (sortProp.name === 'growthRate') {
      return _.orderBy(kArr, k => (k.growthRate === 'S' ? ' ' : k.growthRate));
    } 
    if (sortProp.name === 'growth') {
      return _.orderBy(kArr, k => (k.growth === 'S' ? ' ' : k.growth));
    }
    return _.orderBy(kArr, k => _.get(k, sortProp.prop), sortOrder);
  };

  useEffect(() => {
    if (!selectedFactions || !sortProp) return;
    setDisplayedKnights(sortKnights(filterKnights()));
  }, [selectedFactions, sortProp, sortOrder]);

  return (
    <Container fluid className="mt-3 pl-3 pr-3">
      <h3 className="text-center">Knight Browser</h3>
      <UncontrolledAlert color="info">Not all knight data has been added yet.</UncontrolledAlert>
      <Form>
        <FormGroup row>
          <Col sm={4}>
            <Typeahead
              id="class-typeahead"
              labelKey="name"
              multiple
              options={factionsArr}
              placeholder="Filter by factions..."
              onChange={setSelectedFactions}
              className="mb-2"
            />
          </Col>
        </FormGroup>
      </Form>
      <Row>
        <Col sm="12">
          <Table hover striped responsive>
            <thead>
              <tr className={pt}>
                {_.map(knightProps, kp => (
                  <th onClick={() => order(kp)}>
                    {kp.name}
                    {sortProp === kp 
                      && (<FontAwesomeIcon className="float-right" icon={sortOrder === 'asc' ? faSortUp : faSortDown} />)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {displayedKnights
                .map(knight => (
                  <Fragment key={knight.name}>
                    <tr>
                      {_.map(knightProps, kp => (<td>{_.get(knight, kp.prop)}</td>))}
                    </tr>
                  </Fragment>
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

Knightbrowser.defaultProps = {};

Knightbrowser.propTypes = {};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Knightbrowser);
