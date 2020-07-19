import React, { useState, useEffect, Fragment } from 'react';
import {
  Form, Container, FormGroup, Table,
  Row, Col, Dropdown, DropdownToggle, DropdownItem, DropdownMenu,
} from 'reactstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/pro-solid-svg-icons';
import _ from 'lodash';
import { connect } from 'react-redux';
import knights from '../../data/knights';
import factions from '../../data/factions';
import classes from '../../data/classes';

const factionsArr = Object.values(factions);
const knightsArr = Object.values(knights);
const classesArr = Object.values(classes);

const pt = { cursor: 'pointer' };

const knightProps = {
  name: { name: 'Name', prop: 'name' },
  faction: { name: 'Faction', prop: 'faction.name' },
  startingClass: { name: 'Start Class', prop: 'startingClass.name' },
  startingLevel: { name: 'Start Level', prop: 'startingLevel' },
  growth: { name: 'Growth', prop: 'growth' },
  growthRate: { name: 'Growth Rate', prop: 'growthRate' },
  hp: { name: 'HP', prop: 'startingHP' },
  mp: { name: 'MP', prop: 'startingMP' },
  attack: { name: 'ATK', prop: 'attack' },
  defense: { name: 'DEF', prop: 'defense' },
  str: { name: 'STR', prop: 'str' },
  int: { name: 'INT', prop: 'int' },
  agi: { name: 'AGI', prop: 'agi' },
  manaPool: { name: 'Pool', prop: 'manaPool' },
  mmp30: { name: 'Pool 30', prop: 'maxManaPool' },
  runeArea: { name: 'Rune Area', prop: 'runeArea' },
};

const knightPropsCM = {
  name: { name: 'Name', prop: 'name' },
  faction: { name: 'Faction', prop: 'faction.name' },
  startingClass: { name: 'Start Class', prop: 'challengeStats.startingClass.name' },
  growth: { name: 'Growth', prop: 'challengeStats.growth' },
  growthRate: { name: 'Growth Rate', prop: 'challengeStats.growthRate' },
  hp: { name: 'HP', prop: 'challengeStats.startingHP' },
  mp: { name: 'MP', prop: 'challengeStats.mp' },
  attack: { name: 'ATK', prop: 'challengeStats.attack' },
  defense: { name: 'DEF', prop: 'challengeStats.defense' },
  str: { name: 'STR', prop: 'challengeStats.str' },
  int: { name: 'INT', prop: 'challengeStats.int' },
  agi: { name: 'AGI', prop: 'challengeStats.agi' },
  manaPool: { name: 'Pool', prop: 'challengeStats.manaPool' },
  mmp30: { name: 'Pool 30', prop: 'maxManaPool' },
  runeArea: { name: 'Rune Area', prop: 'challengeStats.runeArea' },
};

const knightPropsCMRaw = { 
  ...knightPropsCM,
  hp: { name: 'HP', prop: 'challengeStats.noClass.startingHP' },
  mp: { name: 'MP', prop: 'challengeStats.noClass.mp' },
  attack: { name: 'ATK', prop: 'challengeStats.noClass.attack' },
  str: { name: 'STR', prop: 'challengeStats.noClass.str' },
  int: { name: 'INT', prop: 'challengeStats.noClass.int' },
  agi: { name: 'AGI', prop: 'challengeStats.noClass.agi' },
};

const modes = [
  { name: 'Regular Game Mode', props: knightProps },
  { name: 'Challenge Mode', props: knightPropsCM },
  { name: 'Challenge Mode (Raw Stats)', props: knightPropsCMRaw },
];

const knightPropsArr = Object.values(knightProps);

const Knightbrowser = () => {
  const [displayedKnights, setDisplayedKnights] = useState([...knightsArr]);
  const [sortProp, setSortProp] = useState(knightPropsArr[0]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [mode, setMode] = useState(modes[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activePropSet, setActivePropSet] = useState(knightProps);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  const [selectedFactions, setSelectedFactions] = useState([]);
  const [selectedClasses, setSelectedClasses] = useState([]);

  const modeChange = (m) => {
    setMode(m);
    setActivePropSet(m.props);
  };

  const order = (prop) => {
    if (prop === sortProp) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
      return;
    }
    setSortProp(prop);
    setSortOrder('asc');
  };

  const filterFaction = toFilter => (_.isEmpty(selectedFactions) ? toFilter : toFilter.filter(k => selectedFactions.includes(k.faction)));
  const filterClasses = toFilter => (_.isEmpty(selectedClasses) ? toFilter : toFilter.filter(k => selectedClasses.includes(k.startingClass)));

  const filterKnights = () => filterFaction(filterClasses(knightsArr));

  const sortKnights = (kArr) => {
    if (sortProp.prop === 'growth') {
      return _.orderBy(kArr, k => (k.growth === 'S' ? '0' : k.growth), sortOrder);
    }
    return _.orderBy(kArr, k => _.get(k, sortProp.prop), sortOrder);
  };

  useEffect(() => {
    if (!selectedFactions || !sortProp) return;
    setDisplayedKnights(sortKnights(filterKnights()));
  }, [selectedFactions, selectedClasses, sortProp, sortOrder]);

  return (
    <Container fluid className="mt-3 pl-3 pr-3">
      <h3 className="text-center">Knight Browser</h3>
      <Form>
        <FormGroup row>
          <Col sm={2}>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret>{mode.name}</DropdownToggle>
              <DropdownMenu>
                {modes.map(m => (<DropdownItem key={m.name} onClick={() => modeChange(m)}>{m.name}</DropdownItem>))}
              </DropdownMenu>
            </Dropdown>
          </Col>
          <Col sm={2}>
            <Typeahead
              id="faction-typeahead"
              labelKey="name"
              multiple
              options={factionsArr}
              placeholder="Filter by factions..."
              onChange={setSelectedFactions}
              className="mb-2"
            />
          </Col>
          <Col sm={3}>
            <Typeahead
              id="class-typeahead"
              labelKey="name"
              multiple
              options={classesArr}
              placeholder="Filter by classes..."
              onChange={setSelectedClasses}
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
                {_.map(activePropSet, kp => (
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
                      {_.map(activePropSet, kp => (<td>{_.get(knight, kp.prop)}</td>))}
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
