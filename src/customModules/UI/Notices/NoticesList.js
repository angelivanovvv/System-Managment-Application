import React from "react";

import Wrapper from "../../../common/HOCs/Wrapper";
import Spinner from "../../../common/Components/Spinner";
import SingleNotice from "./SingleNotice";
import Select from "../Forms/Inputs/Select";

const NoticesList = props => {
  let { formErrors, loading, selectNotice } = props;

  let noticeList = props.notices.map(item => {
    return (
      <SingleNotice
        clickHandler={id => props.noticesListHandler(item.id)}
        type="listNote"
        key={item.id}
        name={item.title}
        id={item.id}
        active={selectNotice}
      />
    );
  });

  if (!formErrors) {
    formErrors = {
      folderId: []
    };
  }

  if (loading) {
    noticeList = <Spinner />;
  }
  return (
    <Wrapper className="ang-notice-list-wrapper">
      <Select
        id={props.folderSelectId}
        name={props.folderSelectName}
        labelName={props.folderSelectLabel}
        placeholder={props.folderSelectPlaceholder}
        directories={props.directories}
        handler={props.updateHandler}
        className={props.folderSelectClassName}
      />
      <h4 className="ang-title ang-bold-title">Select Notice</h4>
      <Wrapper className="ang-notice-list-container">{noticeList}</Wrapper>
    </Wrapper>
  );
};

export default NoticesList;
