import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import config from "../../../common/Configs/sidenav-config";
import { Paths, Routes } from "../../../common/ClientRoutes/clientRoutes";
import { SideNavItem, SideNavBackItem } from "./SideNavItem";

const SideNav = props => {
  let navItems = null;
  let backBtn = config.filter((item, index) => index === 3);
  let buttons = config.filter((item, index) => index !== 3);

  let { pathname } = props.router.location;

  if (pathname !== Paths.HOME) {
    navItems = backBtn.map(item => {
      return (
        <SideNavBackItem
          key={item.itemName}
          itemType={item.itemType}
          itemName={item.itemName}
          itemIcon={item.itemIcon}
          itemSize={item.itemSize}
          itemLink={item.itemLink}
        />
      );
    });
  } else {
    navItems = buttons.map(item => {
      return (
        <SideNavItem
          key={item.itemName}
          itemType={item.itemType}
          itemName={item.itemName}
          itemIcon={item.itemIcon}
          itemSize={item.itemSize}
          itemLink={item.itemLink}
          getItemType={props.getModalType}
        />
      );
    });
  }

  return (
    <Nav
      id="collapse-nav"
      className={
        "flex-column bg-dark ang-sideNav " + (props.isOpen ? "show" : null)
      }
    >
      <Nav.Item className="ang-logo">
        <Link to={Routes.HOME()}>
          <img
            alt="Descrioption of content"
            src={props.logo}
            className="d-inline-block align-top ang-image"
          />
          <span className="ang-title">{props.title}</span>
        </Link>
      </Nav.Item>
      {navItems}
    </Nav>
  );
};

export default SideNav;
