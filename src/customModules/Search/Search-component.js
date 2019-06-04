import React from "react";

import Wrapper from "../../common/HOCs/Wrapper";
import SimpleSearchForm from "../UI/Search/AutoSearch/SimpleSearchForm";
import AdvanceSearchForm from "../UI/Search/AutoSearch/AdvanceSearchForm";
import SearchNav from "../UI/Search/SearchNav";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchType: "simple"
    };
  }

  searchTypeHandler = e => {
    let { getSearchType } = this.props;
    let searchType = e.target.attributes.getNamedItem("data-type").value;
    getSearchType(searchType);
  };

  render() {
    let {
      history,
      searchType,
      advanceFilter,
      searchList,
      simpleSearchList,
      advanceSearchList
    } = this.props;

    return (
      <Wrapper ref="searchHeight" className="ang-search-wrapper">
        <SearchNav onSearchType={this.searchTypeHandler} />
        <Wrapper
          className={
            "ang-simple-search " + (searchType === "simple" ? "show" : "hide")
          }
        >
          <SimpleSearchForm
            history={history}
            items={simpleSearchList}
            className="ang-search-form"
          />
        </Wrapper>
        <Wrapper
          className={
            "ang-advance-search " + (searchType === "advance" ? "show" : "hide")
          }
        >
          <AdvanceSearchForm
            history={history}
            allList={searchList}
            items={advanceSearchList}
            advanceFilter={advanceFilter}
            className="ang-search-form"
          />
        </Wrapper>
      </Wrapper>
    );
  }
}

export default Search;
