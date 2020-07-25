import React, { useState, useEffect, Fragment } from 'react';
import {
  Form, Container, FormGroup, Table,
  Row, Col, Dropdown, DropdownToggle, DropdownItem, DropdownMenu, Alert, Label, UncontrolledDropdown,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Typeahead } from 'react-bootstrap-typeahead';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/pro-solid-svg-icons';
import _ from 'lodash';
import { connect } from 'react-redux';
import knights from '../../data/knights';
import factions from '../../data/factions';
import classes from '../../data/classes';

const factionsArr = _.sortBy(Object.values(factions), 'name');
const knightsArr = Object.values(knights);
const classesArr = _.sortBy(Object.values(classes), 'name');

const pt = { cursor: 'pointer' };

const knightProps = {
  name: { name: 'Name', prop: 'name', comp: false },
  faction: { name: 'Faction', prop: 'faction.name', comp: false },
  startingClass: { name: 'Class', prop: 'startingClass.name', comp: false },
  startingLevel: { name: 'Level', prop: 'startingLevel', comp: false },
  growth: { name: 'Growth', prop: 'growth', comp: false },
  hp: { name: 'HP', prop: 'startingHP', comp: true },
  mp: { name: 'MP', prop: 'startingMP', comp: true },
  attack: { name: 'ATK', prop: 'attack', comp: true },
  defense: { name: 'DEF', prop: 'defense', comp: true },
  str: { name: 'STR', prop: 'str', comp: true },
  int: { name: 'INT', prop: 'int', comp: true },
  agi: { name: 'AGI', prop: 'agi', comp: true },
  manaPool: { name: 'Pool', prop: 'manaPool', comp: true },
  mmp30: { name: 'Pool 30', prop: 'maxManaPool', comp: true },
  runeArea: { name: 'Rune Area', prop: 'runeArea', comp: false },
};

const knightPropsCM = {
  name: { name: 'Name', prop: 'name', comp: false },
  faction: { name: 'Faction', prop: 'faction.name', comp: false },
  startingClass: { name: 'Class', prop: 'challengeStats.startingClass.name', comp: false },
  growthRate: { name: 'Growth Rate', prop: 'challengeStats.growthRate', comp: false },
  hp: { name: 'HP', prop: 'challengeStats.startingHP', comp: true },
  mp: { name: 'MP', prop: 'challengeStats.mp', comp: true },
  attack: { name: 'ATK', prop: 'challengeStats.attack', comp: true },
  defense: { name: 'DEF', prop: 'challengeStats.defense', comp: true },
  str: { name: 'STR', prop: 'challengeStats.str', comp: true },
  int: { name: 'INT', prop: 'challengeStats.int', comp: true },
  agi: { name: 'AGI', prop: 'challengeStats.agi', comp: true },
  manaPool: { name: 'Pool', prop: 'challengeStats.manaPool', comp: true },
  mmp30: { name: 'Pool 30', prop: 'maxManaPool', comp: true },
  runeArea: { name: 'Rune Area', prop: 'challengeStats.runeArea', comp: false },
};

const knightPropsCMRaw = { 
  ...knightPropsCM,
  hp: { name: 'HP', prop: 'challengeStats.noClass.startingHP', comp: true },
  mp: { name: 'MP', prop: 'challengeStats.noClass.mp', comp: true },
  attack: { name: 'ATK', prop: 'challengeStats.noClass.attack', comp: true },
  str: { name: 'STR', prop: 'challengeStats.noClass.str', comp: true },
  int: { name: 'INT', prop: 'challengeStats.noClass.int', comp: true },
  agi: { name: 'AGI', prop: 'challengeStats.noClass.agi', comp: true },
};

const modes = [
  { name: 'Regular Game Mode', props: knightProps },
  { name: 'Challenge Mode', props: knightPropsCM },
  { name: 'Challenge Mode (Raw Stats)', props: knightPropsCMRaw },
];

const knightPropsArr = Object.values(knightProps);

const KnightTooltip = ({ payload }) => {
  if (_.isEmpty(payload)) return (<div />);
  const knight = (payload[0]).payload;
  return (
    <Alert color="dark"><h5>{knight.name}</h5></Alert>
  );
};

KnightTooltip.defaultProps = { payload: [] };

KnightTooltip.propTypes = { payload: PropTypes.arrayOf(PropTypes.shape) };

const Knightbrowser = () => {
  const [displayedKnights, setDisplayedKnights] = useState([...knightsArr]);
  const [sortProp, setSortProp] = useState(knightPropsArr[0]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [mode, setMode] = useState(modes[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activePropSet, setActivePropSet] = useState(knightProps);
  const [compProps, setCompProps] = useState(_.filter(knightProps, kp => kp.comp));
  const [scatterX, setScatterX] = useState(compProps[0]);
  const [scatterY, setScatterY] = useState(compProps[1]);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  const [selectedFactions, setSelectedFactions] = useState([]);
  const [selectedClasses, setSelectedClasses] = useState([]);

  const modeChange = (m) => {
    setMode(m);
    setActivePropSet(m.props);
    const cp = _.filter(m.props, kp => kp.comp);
    console.log(cp);
    setCompProps(cp);
    setScatterX(cp[0]);
    setScatterY(cp[1]);
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
  const filterClasses = (toFilter) => {
    if (_.isEmpty(selectedClasses)) return toFilter;
    return toFilter.filter(k => selectedClasses.includes(mode === modes[0] ? k.startingClass : _.get(k, 'challengeStats.startingClass')));
  };
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
  }, [selectedFactions, selectedClasses, sortProp, sortOrder, scatterX, scatterY]);

  return (
    <Container fluid className="mt-3 pl-3 pr-3">
      <h3 className="text-center">Knight Browser</h3>
      <Row>
        <Col sm={4}>
          <Form inline>
            <Label className="mr-2 ml-4">X Axis: </Label>
            <UncontrolledDropdown className="mr-4">
              <DropdownToggle caret>
                {scatterX.name}
              </DropdownToggle>
              <DropdownMenu>
                {compProps.map(cp => (<DropdownItem onClick={() => setScatterX(cp)}>{cp.name}</DropdownItem>))}
              </DropdownMenu>
            </UncontrolledDropdown>
            <Label>Y Axis: </Label>
            <UncontrolledDropdown className="ml-2">
              <DropdownToggle caret>
                {scatterY.name}
              </DropdownToggle>
              <DropdownMenu>
                {compProps.map(cp => (<DropdownItem onClick={() => setScatterY(cp)}>{cp.name}</DropdownItem>))}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Form>
          <ResponsiveContainer width="90%" height={300}>
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20 }}>
              <CartesianGrid />
              <XAxis dataKey={scatterX.prop} type="number" name={scatterX.name} />
              <YAxis dataKey={scatterY.prop} type="number" name={scatterY.name} />
              <Scatter name="Knights" data={displayedKnights} fill="#8884d8" />
              <Tooltip content={<KnightTooltip />} cursor={{ strokeDasharray: '3 3' }} />
            </ScatterChart>
          </ResponsiveContainer>
        </Col>
      </Row>
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
