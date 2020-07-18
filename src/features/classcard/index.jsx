import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, CardTitle, CardBody, CardHeader } from 'reactstrap';

const ClassCard = ({ cl }) => (
  <Card>
    <CardHeader>
      <CardTitle><h4>{cl.name}</h4></CardTitle>
      <CardBody>
        {!_.isEmpty(cl.questBonus) && (
          <span>
            <strong>Quest Locations:</strong>&nbsp;
            <ul>
              {_.map(cl.questBonus, (qb => (<li key={qb.name}>{qb.name}</li>)))}
            </ul>
          </span>
        )}
      </CardBody>
    </CardHeader>
  </Card>
);

ClassCard.propTypes = {
  cl: PropTypes.shape().isRequired,
};
  
const mapStateToProps = state => ({});
  
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ClassCard);
