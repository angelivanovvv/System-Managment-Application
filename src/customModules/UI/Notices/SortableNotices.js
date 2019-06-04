import React from "react";

import {
  sortableContainer,
  sortableElement,
  arrayMove
} from "react-sortable-hoc";

import { Routes } from "../../../common/ClientRoutes/clientRoutes";
import * as _GH from "../../../common/helpers/generalHelpers";
import Wrapper from "../../../common/HOCs/Wrapper";
import SingleNotice from "./SingleNotice";

const SortableItem = sortableElement(props => (
  <SingleNotice
    id={props.id}
    key={props.key}
    name={props.name}
    link={props.link}
    index={props.index}
    active={props.active}
    dragable={true}
    position={props.position}
    editNotice={props.editNotice}
    saveNotice={props.saveNotice}
    cancelNotice={props.cancelNotice}
    noticeMode={props.noticeMode}
    directoryId={props.directoryId}
    singleChange={props.singleChange}
  />
));

const SortableContainer = sortableContainer(({ children }) => {
  return <ul className="ang-sortable-list">{children}</ul>;
});

class SortableNoticeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      notices: []
    };
  }

  onSortOver = ({ index, newIndex, oldIndex }) => {
    let { notices } = this.props;
    let sortedNotices = _GH.changeNoticePosition(
      notices,
      index,
      newIndex,
      oldIndex
    );

    this.setState({
      ...this.state,
      notices: sortedNotices
    });
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    let { notices } = this.props;
    this.setState({
      notices: arrayMove(notices, oldIndex, newIndex)
    });
    this.props.changeNoticesPosition(notices);
  };

  render() {
    const { notices, description, selectNotice } = this.props;

    let sortedNotices = _GH.sortNoticeByPosition(notices);

    let noticeMessage = (
      <h4 className="ang-notice-message">Empty notice list.</h4>
    );

    let sortableContainer = (
      <SortableContainer
        onSortOver={this.onSortOver}
        onSortEnd={this.onSortEnd}
      >
        {sortedNotices.map((notice, index) => {
          return (
            <SortableItem
              id={notice.id}
              key={`item-${index}`}
              name={notice.title}
              link={Routes.VISIT_NOTE(notice.id)}
              index={index}
              active={parseInt(selectNotice)}
              position={notice.position}
              directoryId={notice.directoryId}
              editNotice={this.props.editNoticeHandler}
              saveNotice={this.props.saveNoticeHandler}
              cancelNotice={this.props.cancelNoticeHandler}
              noticeMode={this.props.singleNoticeMode}
              singleChange={this.props.singleUpdateHandler}
            />
          );
        })}
      </SortableContainer>
    );

    if (sortedNotices.length != 0) noticeMessage = null;

    return (
      <Wrapper className="ang-notices-wrapper">
        <h3 className="ang-title ang-bold-title">{description}:</h3>
        <Wrapper className="ang-notices-container">
          {noticeMessage}
          {sortableContainer}
        </Wrapper>
      </Wrapper>
    );
  }
}

export default SortableNoticeList;
