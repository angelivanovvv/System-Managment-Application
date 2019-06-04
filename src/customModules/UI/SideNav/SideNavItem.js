import React from "react";

import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideNavItem = props => {
  return (
    <Nav.Item
      className="ang-sideНav-item"
      type={props.itemType}
      onClick={props.getItemType}
    >
      <FontAwesomeIcon
        icon={props.itemIcon}
        size={props.itemSize}
        className="ang-icon"
      />
      <span className="ang-name">{props.itemName}</span>
    </Nav.Item>
  );
};

const SideNavBackItem = props => {
  return (
    <Nav.Item className="ang-sideНav-item" type={props.itemType}>
      <Link className="ang-link" to={props.itemLink}>
        <FontAwesomeIcon
          icon={props.itemIcon}
          size={props.itemSize}
          className="ang-icon"
        />
        <span className="ang-name">{props.itemName}</span>
      </Link>
    </Nav.Item>
  );
};

export { SideNavItem, SideNavBackItem };
