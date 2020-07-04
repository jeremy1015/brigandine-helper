import React, { useState, useEffect, Fragment } from 'react';
import {
  Form, Container, FormGroup, Label, CardBody, Table,
  Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';
import { connect } from 'react-redux';
import knights from '../../data/knights';
import factions from '../../data/factions';

const factionsArr = Object.values(factions);
const knightsArr = Object.values(knights);

const Knightbrowser = () => {
  const knightProps = Object.keys(knightsArr[0]);
  const [displayedKnights, setDisplayedKnights] = useState([...knightsArr]);
  const [factionFilter, setFactionFilter] = useState('All');
  const [sortProp, setSortProp] = useState(knightProps[0]);
  const [sortOrder, setSortOrder] = useState('asc');
  const changeFactionFilter = e => setFactionFilter(e.target.value);
  const changeSortProp = e => setSortProp(e.target.value);
  const changeSortOrder = e => setSortOrder(e.target.value);

  return (
    <Container fluid className="mt-3 pl-3 pr-3">
      <h3 className="text-center">Knight Browser</h3>
      <Row>
        <Col sm="12">
          <Form>
            <FormGroup>
              <Label for="faction-select">Faction filter: </Label>
              <select className="mr-3" id="faction-select" onChange={changeFactionFilter} value={factionFilter}>
                <option key="All" value="All">All</option>
                {factionsArr.map(faction => (<option key={faction.name} value={faction.name}>{faction.name}</option>))}
              </select>
              <Label for="sort-select">Sort by: </Label>
              <select className="mr-3" id="sort-select" onChange={changeSortProp} value={sortProp}>
                {knightProps.map(prop => (<option key={prop} value={prop}>{prop}</option>))}
              </select>
              <Label for="sort-select">Order by: </Label>
              <select id="sort-select" onChange={changeSortOrder} value={sortOrder}>
                <option key="asc" value="asc">Ascending</option>
                <option key="desc" value="desc">Descending</option>
              </select>
            </FormGroup>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <Table striped responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Faction</th>
                <th>Median Max Mana Pool</th>
              </tr>
            </thead>
            <tbody>
              {displayedKnights
                .sort((knight1, knight2) => {
                  if (knight1[sortProp] < knight2[sortProp]) {
                    return sortOrder === 'asc' ? -1 : 1;
                  }
                  if (knight1[sortProp] > knight2[sortProp]) {
                    return sortOrder === 'asc' ? 1 : -1;
                  }
                  return 0;
                })
                .filter((knight) => {
                  if (factionFilter === 'All') {
                    return true;
                  } 
                  return knight.faction === factionFilter;
                })
                .map(knight => (
                  <Fragment key={knight.name}>
                    <tr>
                      <td>{knight.name}</td>
                      <td>{knight.faction}</td>
                      <td>{knight.maxManaPool}</td>
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Knightbrowser);
