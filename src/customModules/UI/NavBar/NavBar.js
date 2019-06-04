import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";

import config from "../../../common/Configs/navbar-config";

const NavBar = props => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="ang-navBar"
    >
      <Button
        onClick={props.toggle}
        aria-controls="example-collapse-text"
        aria-expanded={props.area}
        className="ang-button ang-menu-button"
      >
        Menu
      </Button>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ang-nav ml-auto">
          {config.map(single => {
            return (
              <Nav.Item key={single.itemName} className="ang-navBar-item">
                {single.itemName}
              </Nav.Item>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
