import React from "react";

import { Container, Col, Row, Card, Button } from "react-bootstrap";

import { Routes } from "../../../common/ClientRoutes/clientRoutes";

import NoticeList from "../../UI/Notices/NoticesList";
import ConfirmModal from "../../../common/Components/ConfirmModal";
import SuccessModal from "../../../common/Components/SuccessModal";
import Spinner from "../../../common/Components/Spinner";
import errorHandler from "../../../common/HOCs/ErrorHandler";

class RemoveNotice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null
    };
  }

  componentDidMount() {
    this.props.toClearSingleNotice();
    this.props.toGetDirectories();
    this.props.toGetNotices();
    this.props.toCloseModal();
  }

  noticesFilterHadler = event => {
    let { value } = event.target;
    let { notices } = this.props;

    if (value === "default") {
      this.props.toRefreshNotices();
    } else {
      this.props.toFilterNotices(notices, value);
    }
  };

  noticesHandler = id => {
    this.setState({
      ...this.state,
      activeIndex: id
    });
    this.props.toGetSingleNotice(id);
  };

  showRemoveModalHandler = () => {
    this.props.toShowRemoveModal();
  };

  closeRemoveModalHandler = () => {
    this.props.toCloseRemoveModal();
  };

  removeHandler = () => {
    let id = this.props.singleNotice.id;
    this.props.toRemoveNotice(id);
  };

  cancelHandler = () => {
    this.props.history.push(Routes.HOME());
  };

  render() {
    let { activeIndex } = this.state;
    let {
      options,
      notices,
      filterNotices,
      filtered,
      loading,
      directories,
      singleNotice
    } = this.props;

    let cardInfo = (
      <Card.Body className="ang-card-body">
        <Card.Title className="ang-card-title">
          If you want to remove notice select from list.
        </Card.Title>
        <Card.Text className="ang-card-text">
          If you want to remove notice, first you need to select it from list.
        </Card.Text>
      </Card.Body>
    );

    let cardBody = (
      <Card.Body className="ang-card-body">
        <Card.Title className="ang-card-title">
          Are you sure you want to remove
          <span className="ang-element"> {singleNotice.title}?</span>
        </Card.Title>
        <Card.Text className="ang-card-text">
          If you want do remove Notice, first you need to select it from list
          and then click
          <span className="ang-remove-element"> "remove notice"</span> !
        </Card.Text>
      </Card.Body>
    );

    let cardFooter = (
      <Card.Footer className="ang-card-footer">
        <Button
          className="ang-button ang-cancel-button"
          onClick={this.cancelHandler}
        >
          Cancel
        </Button>
        <Button
          className="ang-button ang-remove-button"
          onClick={this.showRemoveModalHandler}
        >
          Remove Notice
        </Button>
      </Card.Footer>
    );

    if (loading && loading !== null) {
      cardBody = <Spinner />;
    }

    if (!singleNotice.title) {
      cardBody = null;
      cardFooter = null;
    } else {
      cardInfo = null;
    }

    return (
      <Container className="ang-container-wrapper">
        <Row className="ang-row-wrapper">
          <Col className="ang-col-wrapper" lg="5" sm="12">
            <NoticeList
              loading={loading}
              selectNotice={activeIndex}
              folderSelectName="filterId"
              folderSelectClassName="ang-filter-select"
              folderSelectLabel="Filter"
              folderSelectPlaceholder="Select Folder"
              noticesListHandler={id => this.noticesHandler(id)}
              updateHandler={this.noticesFilterHadler}
              directories={directories}
              notices={filtered ? filterNotices : notices}
            />
          </Col>
          <Col className="ang-col-wrapper" lg="7" sm="12">
            <Card className="ang-card-template">
              <Card.Header className="ang-card-header">
                <h3 className="ang-title">Remove Notice:</h3>
                <h4 className="ang-element">{singleNotice.title}</h4>
              </Card.Header>
              {cardInfo}
              {cardBody}
              {cardFooter}
            </Card>
          </Col>
        </Row>
        <ConfirmModal
          showModal={options.modals.removeShow}
          closeModal={this.closeRemoveModalHandler}
          removeHandler={this.removeHandler}
          loading={loading}
          removeElement={singleNotice}
          activeIndex={activeIndex}
        />
        <SuccessModal
          type="delete"
          showModal={options.modals.editShow}
          loading={loading}
          updateElement={singleNotice.title}
        />
      </Container>
    );
  }
}

export default errorHandler(RemoveNotice);
