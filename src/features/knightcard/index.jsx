import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, CardTitle, CardBody, Media } from 'reactstrap';

//   name: 'Avenir',
//   maxManaPool: 260,
//   faction: f.guimoule,
//   startingClass: c.bishop,
//   img: imgAvenir,
//   growthRate: 'D',
//   growth: 'C',
//   startingLevel: 12,
//   startingHP: 283,
//   attack: 93,
//   defense: 110,
//   str: 62,
//   int: 76,
//   agi: 76,
//   manaPool: 188,
//   runeArea: 3,

const KnightCard = ({ knight }) => (
  <Media>
    <Media left top>
      <img className="media-object mr-1" src={knight.img} alt="knight" height="128px" />
    </Media>
    <Media body>
      <Media heading>{knight.name}</Media>
      {knight.faction.name}
    </Media>
  </Media>
);

KnightCard.propTypes = {
  knight: PropTypes.shape().isRequired,
};
  
const mapStateToProps = state => ({});
  
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(KnightCard);
