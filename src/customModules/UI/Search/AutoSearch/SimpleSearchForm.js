import React, { useState } from "react";

import { Button } from "react-bootstrap";
import ReactAutocomplete from "react-autocomplete";

import * as searchOptions from "./Options";

import Wrapper from "../../../../common/HOCs/Wrapper";

const inputProps = {
  id: "ang-auto-input",
  placeholder: "Enter notice name..."
};

const wrapperStyle = {
  width: "100%"
};

const simpleSearchForm = props => {
  const { history, items, className } = props;

  const [name, setValue] = useState();

  return (
    <Wrapper className={className}>
      <h3 className="ang-title ang-bold-title">Simple search :</h3>
      <Wrapper className="ang-search-auto">
        <ReactAutocomplete
          className="ang-input"
          items={items}
          inputProps={inputProps}
          shouldItemRender={(item, value) =>
            searchOptions.shouldItemRender(item, value)
          }
          getItemValue={item => searchOptions.getItemValue(item)}
          renderItem={(item, highlighted) =>
            searchOptions.renderItem(item, highlighted)
          }
          renderMenu={children => searchOptions.renderMenu(children)}
          wrapperStyle={wrapperStyle}
          value={name}
          onChange={e => {
            setValue(e.target.value);
          }}
          onSelect={(item, details) =>
            searchOptions.selectHandler(item, details, setValue, history)
          }
        />
        <Button
          onClick={() => searchOptions.clickHandler(name, items, history)}
          className="ang-button ang-search-button"
        >
          Search
        </Button>
      </Wrapper>
      <h5 className="ang-guides">***You can search by name of notice.</h5>
    </Wrapper>
  );
};

export default simpleSearchForm;
