import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
} from 'reactstrap';
import { connect } from 'react-redux';
import eliza from '../../img/eliza.png';


const NavigationBar = () => (
  <Navbar color="light" expand="sm">
    <NavbarBrand>
      <img src={eliza} alt="hide and seek" height="32px" />
      &nbsp;Brigandine Helper
    </NavbarBrand>
    <Collapse navbar>
      <Nav className="mr-auto" navbar />
    </Collapse>
  </Navbar>
);

NavigationBar.defaultProps = {};

NavigationBar.propTypes = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
