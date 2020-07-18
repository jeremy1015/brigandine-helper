import React, { Fragment } from 'react';
import _ from 'lodash';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import ClassCard from '../classcard/index';

import classes from '../../data/classes';

const rootClasses = _.filter(classes, c => _.isUndefined(c.parentClass));
const childClasses = c => _.filter(classes, cc => cc.parentClass === c);

const ClassChart = () => (
  <Container fluid className="mt-3 pl-3 pr-3">
    {rootClasses.map(rc => (
      <div key={rc.name} className="pb-2">
        <Row>
          <Col sm={4}>
            <ClassCard cl={rc} />
          </Col>
        </Row>
        {(childClasses(rc)).map(cc => (
          <Fragment key={cc.name}>
            <Row>
              <Col sm={{ size: 4, offset: 1 }}>
                <ClassCard cl={cc} />
              </Col>
            </Row>
            {(childClasses(cc)).map(cc2 => (
              <Row key={cc2.name}>
                <Col sm={{ size: 4, offset: 2 }}>
                  <ClassCard cl={cc2} />
                </Col>
              </Row>
            ))}
          </Fragment>
        ))}
      </div>
    ))}
  </Container>
);

ClassChart.propTypes = {};
  
const mapStateToProps = state => ({});
  
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ClassChart);
