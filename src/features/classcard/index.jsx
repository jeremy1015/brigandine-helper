import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const hrStyle = { backgroundColor: 'wheat' };
const cardStyle = { backgroundColor: '#333' };

const ClassCard = ({ cl }) => (
  <div style={cardStyle}>
    <h5 className="ml-2 pt-2">{cl.name}</h5>
    <hr style={hrStyle} />
    {!_.isEmpty(cl.questBonus) && (
      <span>
        <strong>Quest Locations:</strong>&nbsp;
        <ul>
          {_.map(cl.questBonus, (qb => (<li key={qb.name}>{qb.name}</li>)))}
        </ul>
      </span>
    )}
  </div>
);

ClassCard.propTypes = {
  cl: PropTypes.shape().isRequired,
};
  
const mapStateToProps = state => ({});
  
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ClassCard);
