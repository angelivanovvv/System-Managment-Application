import React, { useState } from "react";

import { Button } from "react-bootstrap";
import ReactAutocomplete from "react-autocomplete";

import * as searchOptions from "./Options";

import Wrapper from "../../../../common/HOCs/Wrapper";

const inputProps = {
  id: "ang-auto-input",
  placeholder: "Enter tag or content word..."
};

const wrapperStyle = {
  width: "100%"
};

const advanceSearchForm = props => {
  const { history, items, allList, className, advanceFilter } = props;
  const [name, setValue] = useState();
  return (
    <Wrapper className={className}>
      <h3 className="ang-title ang-bold-title">Advance search :</h3>
      <Wrapper className="ang-search-auto">
        <ReactAutocomplete
          className="ang-input"
          items={items}
          inputProps={inputProps}
          getItemValue={item => searchOptions.getItemValue(item)}
          renderItem={(item, highlighted) =>
            searchOptions.renderItem(item, highlighted)
          }
          renderMenu={children => searchOptions.renderMenu(children)}
          wrapperStyle={wrapperStyle}
          value={name}
          onChange={event =>
            searchOptions.filterHandler(event, allList, setValue, advanceFilter)
          }
          onSelect={item => searchOptions.advanceSelectHandler(item, setValue)}
        />
        <Button
          onClick={() => searchOptions.clickHandler(name, items, history)}
          className="ang-button ang-search-button"
        >
          Search
        </Button>
      </Wrapper>
      <h5 className="ang-guides">
        ***You can search by tag or content of notice.
      </h5>
    </Wrapper>
  );
};

export default advanceSearchForm;
