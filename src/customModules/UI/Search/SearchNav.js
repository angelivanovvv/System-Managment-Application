import React from "react";

import { Nav, Button } from "react-bootstrap";

const searchNav = props => {
  return (
    <Nav className="ang-search-nav">
      <Nav.Item className="ang-search-item">
        <Button
          className="ang-button ang-simple-search-button"
          onClick={props.onSearchType}
          data-type="simple"
        >
          Simple Search
        </Button>
      </Nav.Item>
      <Nav.Item className="ang-search-item">
        <Button
          className="ang-button ang-advance-search-button"
          onClick={props.onSearchType}
          data-type="advance"
        >
          Advance Search
        </Button>
      </Nav.Item>
    </Nav>
  );
};

export default searchNav;
