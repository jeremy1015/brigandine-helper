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
  mmp30: { name: 'Median Mana Pool at Level 30', prop: 'maxManaPool' },
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
                <th onClick={() => order(knightProps.name)}>
                  Name
                  {sortProp === knightProps.name 
                    && (<FontAwesomeIcon className="float-right" icon={sortOrder === 'asc' ? faSortUp : faSortDown} />)}
                </th>
                <th onClick={() => order(knightProps.faction)}>
                  Faction
                  {sortProp === knightProps.faction 
                    && (<FontAwesomeIcon className="float-right" icon={sortOrder === 'asc' ? faSortUp : faSortDown} />)}
                </th>
                <th>Class</th>
                <th>Level</th>
                <th>Growth</th>
                <th>Growth Rate</th>
                <th>HP</th>
                <th>ATK</th>
                <th>DEF</th>
                <th>STR</th>
                <th>INT</th>
                <th>AGI</th>
                <th>Pool</th>
                <th>30 Pool</th>
                <th>RA</th>
              </tr>
            </thead>
            <tbody>
              {displayedKnights
                .map(knight => (
                  <Fragment key={knight.name}>
                    <tr>
                      <td>{knight.name}</td>
                      <td>{_.get(knight, 'faction.name')}</td>
                      <td>{_.get(knight, 'startingClass.name')}</td>
                      <td>{knight.startingLevel}</td>
                      <td>{knight.growth}</td>
                      <td>{knight.growthRate}</td>
                      <td>{knight.startingHP}</td>
                      <td>{knight.attack}</td>
                      <td>{knight.defense}</td>
                      <td>{knight.str}</td>
                      <td>{knight.int}</td>
                      <td>{knight.agi}</td>
                      <td>{knight.manaPool}</td>
                      <td>{knight.maxManaPool}</td>
                      <td>{knight.runeArea}</td>
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
