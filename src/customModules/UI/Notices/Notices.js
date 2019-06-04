import React from "react";

import { Routes } from "../../../common/ClientRoutes/clientRoutes";
import Wrapper from "../../../common/HOCs/Wrapper";
import Spinner from "../../../common/Components/Spinner";
import SingleNotice from "./SingleNotice";

const Notices = props => {
  let {
    notices,
    loading,
    description,
    selectNotice,
    editNoticeHandler,
    saveNoticeHandler,
    cancelNoticeHandler,
    singleUpdateHandler,
    singleNoticeMode
  } = props;

  let NoticeMessage = (
    <h4 className="ang-notice-message">Empty notice list.</h4>
  );

  let Notices = notices.map(notice => {
    return (
      <SingleNotice
        id={notice.id}
        key={notice.id}
        name={notice.title}
        link={Routes.VISIT_NOTE(notice.id)}
        active={parseInt(selectNotice)}
        position={notice.position}
        editNotice={props.editNoticeHandler}
        saveNotice={props.saveNoticeHandler}
        cancelNotice={props.cancelNoticeHandler}
        noticeMode={props.singleNoticeMode}
        directoryId={notice.directoryId}
        singleChange={props.singleUpdateHandler}
      />
    );
  });

  if (loading && loading !== null) Notices = <Spinner />;

  if (notices.length != 0) NoticeMessage = null;

  return (
    <Wrapper className="ang-notices-wrapper">
      <h3 className="ang-title ang-bold-title">{description}:</h3>
      <Wrapper className="ang-notices-container">
        {NoticeMessage}
        {Notices}
      </Wrapper>
    </Wrapper>
  );
};

export default Notices;
