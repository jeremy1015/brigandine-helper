import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink,
  NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from '../../util/routes';
import eliza from '../../img/eliza.png';

const NavigationBar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand>
        <img src={eliza} alt="hide and seek" height="32px" />
      &nbsp;Brigandine Helper
      </NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} color="light" className="mr-2" />
      <Collapse isOpen={!collapsed} navbar>
        <Nav className="mr-auto" navbar>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle nav caret>
              Useful Links
            </DropdownToggle>
            <DropdownMenu>
              <NavLink target="_blank" href="https://discord.gg/8CF38Qe">
                <DropdownItem>
                  Brigandine Discord
                </DropdownItem>
              </NavLink>
              <NavLink target="_blank" href="https://docs.google.com/spreadsheets/d/1phCX__6IuomaEnioApz_db_ZNaA7xwPazKwJoHDqhIY">
                <DropdownItem>
                  Runersia Stat Tracker by Lasci
                </DropdownItem>
              </NavLink>
              <NavLink target="_blank" href="https://brigandine.fandom.com/wiki/Brigandine:_The_Legend_of_Runersia">
                <DropdownItem>
                  Brigandine Fandom Wiki
                </DropdownItem>
              </NavLink>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle nav caret>
              Reference Charts
            </DropdownToggle>
            <DropdownMenu>
              <NavLink tag={Link} to={routes.classchart}>
                <DropdownItem>
                  Class Tree
                </DropdownItem>
              </NavLink>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink tag={Link} to={routes.questfinder}>
              Location Questfinder
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={routes.knightbrowser}>
              Knight Browser
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  ); 
};

NavigationBar.defaultProps = {};

NavigationBar.propTypes = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
