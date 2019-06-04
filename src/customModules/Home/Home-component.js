import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import Search from "../Search/Search-component";

import Folders from "../UI/FolderTree/FolderTree";
import Notices from "../UI/Notices/Notices";
import SortableNotices from "../UI/Notices/SortableNotices";

import Modal from "../Modal/Modal-container";

import errorHandler from "../../common/HOCs/ErrorHandler";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      folderHasChildren: true,
      singleNotice: {
        editMode: false,
        saveMode: false
      },
      selectedNotice: null,
      selectedFolder: null,
      noticeName: ""
    };
  }

  componentDidMount() {
    this.props.toClearDirectoriesTree();
    this.props.toClearNoticesList();
    this.props.toClearSingleNotice();

    this.props.toGetDirectories();
    this.props.toGetNotices();
  }

  filterNoticesHandler = (notices, dirId) => {
    if (dirId === 1) {
      this.props.toRefreshNotices();
    } else {
      this.props.toFilterNotices(notices, dirId);
    }
  };

  foldersToggleHandler = (node, toggled) => {
    let dirId = node.id;
    let { notices } = this.props;

    if (this.state.cursor) {
      this.state.cursor.active = false;
    }
    node.active = true;
    if (node.children) {
      node.toggled = toggled;
    }

    if (Array.isArray(node.children)) {
      if (node.children.length !== 0) {
        this.setState({
          ...this.state,
          folderHasChildren: true,
          selectedFolder: dirId
        });
      } else {
        this.setState({
          ...this.state,
          folderHasChildren: false,
          selectedFolder: dirId
        });
      }
    }

    this.filterNoticesHandler(notices, dirId);
    this.setState({ cursor: node });
  };

  changeOrderPositionHandler = notices => {
    this.props.toChangeNoticesPosition(notices);
  };

  singleNoticeUpdateHandler = event => {
    let { value } = event.target;
    this.setState({
      ...this.state,
      noticeName: value
    });
  };

  singleNoticeEditHandler = event => {
    let { id } = event.target;

    this.setState({
      ...this.state,
      singleNotice: {
        editMode: true,
        saveMode: false
      },
      selectedNotice: parseInt(id),
      folderHasChildren: true
    });

    this.props.toGetSingleNotice(id);
  };

  singleNoticeCancelHandler = () => {
    this.setState({
      ...this.state,
      singleNotice: {
        editMode: false,
        saveMode: true
      }
    });
  };

  singleNoticeSaveHandler = () => {
    let { noticeName, selectedNotice } = this.state;
    let singleNotice = this.props.singleNotice;

    let payload = {
      id: selectedNotice,
      directoryId: singleNotice.directoryId,
      title: noticeName === "" ? singleNotice.title : noticeName,
      tags: singleNotice.tags,
      description: singleNotice.description,
      position: singleNotice.position
    };

    this.setState({
      ...this.state,
      singleNotice: {
        editMode: false,
        saveMode: true
      }
    });

    this.props.toEditSingleNotice(selectedNotice, payload, true);
  };

  render() {
    let { folderHasChildren, singleNotice, selectedNotice } = this.state;
    let {
      history,
      options,
      loadingNotices,
      loadingDirs,
      directories,
      filtered,
      notices,
      filter,
      searchList,
      simpleSearchList,
      advanceSearchList
    } = this.props;

    let NoticesList = (
      <Notices
        loading={loadingNotices}
        notices={filtered ? filter : notices}
        description="Notices"
        selectNotice={selectedNotice}
        singleNoticeMode={singleNotice}
        saveNoticeHandler={this.singleNoticeSaveHandler}
        editNoticeHandler={this.singleNoticeEditHandler}
        cancelNoticeHandler={this.singleNoticeCancelHandler}
        singleUpdateHandler={this.singleNoticeUpdateHandler}
      />
    );

    if (!folderHasChildren) {
      NoticesList = (
        <SortableNotices
          loading={loadingNotices}
          notices={filtered ? filter : notices}
          description="Notices"
          selectNotice={selectedNotice}
          singleNoticeMode={singleNotice}
          saveNoticeHandler={this.singleNoticeSaveHandler}
          editNoticeHandler={this.singleNoticeEditHandler}
          cancelNoticeHandler={this.singleNoticeCancelHandler}
          singleUpdateHandler={this.singleNoticeUpdateHandler}
          changeNoticesPosition={this.changeOrderPositionHandler}
        />
      );
    }

    return (
      <Container className="ang-container-wrapper">
        <Row className="ang-row-wrapper">
          <Col className="ang-col-wrapper" lg="5" sm="12">
            <Folders
              description="Folders"
              loading={loadingDirs}
              payload={directories}
              toggleHandler={this.foldersToggleHandler}
            />
          </Col>
          <Col className="ang-col-wrapper" lg="7" sm="12">
            <Search
              getSearchType={this.props.toGetSearchType}
              advanceFilter={this.props.toAdvanceFilter}
              searchType={options.searchType}
              history={history}
              searchList={searchList}
              simpleSearchList={simpleSearchList}
              advanceSearchList={advanceSearchList}
            />
            {NoticesList}
          </Col>
        </Row>
        <Modal
          show={options.sideNav.modalShow}
          onHide={this.props.toCloseModal}
        />
      </Container>
    );
  }
}

export default errorHandler(Home);
