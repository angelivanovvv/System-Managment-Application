import React from "react";
import { Routes } from "../../../../common/ClientRoutes/clientRoutes";

import * as helpers from "../../../../common/helpers/actionHelpers";
import { isUndefined } from "util";

const shouldItemRender = (item, value) =>
  item.title.toLowerCase().indexOf(value.toLowerCase()) > -1;

const getItemValue = item => item.title;

const renderItem = (item, highlighted) => {
  return (
    <div
      key={item.id}
      style={{ backgroundColor: highlighted ? "#eee" : "transparent" }}
    >
      {item.title}
    </div>
  );
};

const renderMenu = children => <div className="ang-menu-list">{children}</div>;

const selectHandler = (item, details, setValue, history) => {
  setValue(item);
  history.push(Routes.VISIT_NOTE(details.id));
};

const advanceSelectHandler = (item, setValue) => {
  setValue(item);
};

const filterHandler = (event, items, setValue, filter) => {
  let value = event.target.value;
  let advanceList = helpers.advanceFilter(value, items);
  let reduceList = helpers.getByName(advanceList);
  setValue(value);
  filter(reduceList);
};

const clickHandler = (name, items, history) => {
  if (name) {
    let title = name.trim();
    let item = helpers.findByTitle(title, items);

    if (typeof item !== "undefined") {
      history.push(Routes.VISIT_NOTE(item.id));
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export {
  shouldItemRender,
  getItemValue,
  renderItem,
  renderMenu,
  selectHandler,
  advanceSelectHandler,
  clickHandler,
  filterHandler
};
